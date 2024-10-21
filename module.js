
/**
<details-toggle>

The gods of the World Wide Web, in their eternal wisdom, delivered onto us a
`<details>` element that is impossible to style with opening or closing
transitions. So the `<details-toggle>` custom element provides an animated
alternative.

<details-toggle>
    <h4 slot="summary">Click to open</h4>
    Crunchum ipsum dolor sit coder void, constructor function, sed do while loop
    python orientation semi colon incident. Duis aute irure indent tabs or spaces
    velit esse cilium buntum how crunchy duntum. Excepteur tranquilis syntax
    error memorandum qui officia nostrud operating system alertus.
</details-toggle>


## Import

<!--
Download the latest release:

[github.com/stephband/details-toggle/releases](https://github.com/stephband/details-toggle/releases)
-->

Include the CSS:

```html
<link rel="stylesheet" href="./details-toggle.css" />
```

Import and register the `<details-toggle>` custom element, upgrading any
instances already in the DOM:

```js
import DetailsToggle from './details-toggle.js';
```


## Use

A `details-toggle` is collapsed to the height of its `slot="summary"` content by
default, and opens to display all content when the summary content is clicked.

```html
<details-toggle>
    <h4 slot="summary">Click to open</h4>
    Crunchum ipsum dolor sit coder void, constructor function, sed
    do while loop python orientation semi colon incident. Duis aute
    irure indent tabs or spaces velit esse cilium buntum how crunchy
    duntum.
</details-toggle>
```
**/

import Signal           from 'fn/signal.js';
import create           from 'dom/create.js';
import events           from 'dom/events.js';
import styles           from 'dom/styles.js';
import isPrimaryButton  from 'dom/is-primary-button.js';
import { px }           from 'dom/parse-length.js';
import { trigger }      from 'dom/trigger.js';
import element, { getInternals } from 'dom/element.js';


const assign = Object.assign;


function animateToOpen(host, element) {
    // Transition smoothly to open state by calculating and setting the
    // target maxHeight of the slot for the duration of the transition
    const scrollHeight  = element.scrollHeight;
    const computed      = getComputedStyle(element);
    const paddingTop    = px(computed.getPropertyValue('padding-top') || 0);
    const paddingBottom = px(computed.getPropertyValue('padding-bottom') || 0);

    events('transitionend', element)
    .slice(0, 1)
    .each((e) => element.style.maxHeight = '');

    element.style.maxHeight = (paddingTop + scrollHeight + paddingBottom) + 'px';

    host.setAttribute('open', '');
}

function animateToClose(host, element) {
    // Transition smoothly to closed state by reading and setting the
    // maxHeight briefly at the start of the transition
    const scrollHeight  = element.scrollHeight;
    const computed      = getComputedStyle(element);
    const paddingBottom = px(computed.getPropertyValue('padding-bottom') || 0);
    const marginBottom  = px(computed.getPropertyValue('margin-bottom') || 0);

    element.style.transition    = 'none';
    element.style.maxHeight     = scrollHeight + 'px';
    element.style.paddingBottom = paddingBottom + 'px';
    element.style.marginBottom  = marginBottom + 'px';

    host.removeAttribute('open');
    host.scrollTop = 0;

    requestAnimationFrame(() => {
        element.style.transition    = '';
        element.style.maxHeight     = '';
        element.style.paddingBottom = '';
        element.style.marginBottom  = '';
    });
}

function isIgnorable(e) {
    // Default is prevented indicates that this click has already
    // been handled. Save ourselves the overhead of further handling.
    if (e.defaultPrevented) { return true; }

    // Ignore mousedowns on any button other than the left (or primary)
    // mouse button, or when a modifier key is pressed.
    if (!isPrimaryButton(e)) { return true; }
}

export default element('<details-toggle>', {
    focusable: true,

    shadow: `
        <link rel="stylesheet" href="${ window.detailsToggleStylesheet || import.meta.url.replace(/module\.js$/, 'shadow.css') }"/>
    `,

    construct: function(shadow, internals) {
        // Create a DOM of the form:
        // <link rel="stylesheet" href="/source/bolt/elements/details-toggle.shadow.css" />
        // <slot name="summary"><button></button></slot>
        // <slot></slot>
        //const style   = styles(':host', shadow)[0];
        const slot    = create('slot', { part: 'content' });
        const summary = create('slot', { part: 'summary', name: 'summary' });
        const button  = create('button', { type: "button", html: "Open" });

        summary.append(button);
        shadow.append(summary, slot);

        internals.$open      = Signal.of(false);
        internals.$loaded    = Signal.of(false);
        internals.$connected = Signal.of(false);
        internals.slot       = slot;

        events('click', summary).each((e) => {
            // Ignore right-clicks, option-clicks
            if (isIgnorable(e)) { return; }
            // Prevent default to mark as handled
            e.preventDefault();
            // Toggle the element
            this.open = !this.open;
        });

        // On pointerdown on a focusable, focus is delegated to the first
        // focusable element inside its dom, which can make the content slot
        // scroll up. Put it back down.
        this.addEventListener('focusin', (e) => slot.scrollTop = 0);
    },

    connect: function(shadow, { $connected }) {
        $connected.value = true;
    },

    disconnect: function(shadow, { $connected }) {
        $connected.value = false;
    },

    load: function(shadow, { $loaded }) {
        $loaded.value = true;

        // If the element is identified by the location hash, open the element
        const hash = window.location.hash;
        if (hash && /^#\S+$/.test(hash) && this.id === hash.slice(1)) {
            this.open = true;
        }
    }
}, {
    open: {
        /**
        open=""
        A boolean attribute describing the state of the `details-toggle`.
        **/
        attribute: function(value) {
            this.open = value !== null;
        },

        /**
        .open=false
        A boolean property describing the state of the `details-toggle`: `true`
        when the `details-toggle` is open, `false` when it is not.
        **/
        get: function() {
            const { $open } = getInternals(this);
            return $open.value;
        },

        set: function(value) {
            const { $connected, $loaded, $open, slot } = getInternals(this);

             // If toggle has not changed do nothing
            if (!!value === $open.value) return;

            if (value) {
                $open.value = true;

                // If connected and loaded we can animate
                if ($connected.value && $loaded.value) animateToOpen(this, slot);
                // Otherwise we cannot
                else this.setAttribute('open', '');

                /**
                'open'
                Sent from `details-toggle` when opened.
                **/
                trigger('open', this);
            }
            else {
                $open.value = false;
                animateToClose(this, slot);

                /**
                'close'
                Sent from `details-toggle` when closed.
                **/
                trigger('close', this);
            }
        }
    }
}, 'stephen.band/details-toggle/');
