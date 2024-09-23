
import create           from 'dom/create.js';
import events           from 'dom/events.js';
import styles           from 'dom/styles.js';
import isPrimaryButton  from 'dom/is-primary-button.js';
import { px }           from 'dom/parse-length.js';
import { getInternals } from 'dom/element.js';

const assign = Object.assign;

function isIgnorable(e) {
    // Default is prevented indicates that this click has already
    // been handled. Save ourselves the overhead of further handling.
    if (e.defaultPrevented) { return true; }

    // Ignore mousedowns on any button other than the left (or primary)
    // mouse button, or when a modifier key is pressed.
    if (!isPrimaryButton(e)) { return true; }
}

export default {
    mode: 'closed',

    focusable: true,

    construct: function(shadow) {
        // Create a DOM of the form:
        // <link rel="stylesheet" href="/source/bolt/elements/details-toggle.shadow.css" />
        // <slot name="summary"><button></button></slot>
        // <slot></slot>
        const style   = styles(':host', shadow)[0];
        const slot    = create('slot', { part: 'content' });
        const summary = create('slot', { part: 'summary', name: 'summary' });
        const button  = create('button', { type: "button", html: "Open" });

        summary.append(button);
        shadow.append(summary, slot);

        const changes = events('slotchange', slot);

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

        // Internal view object
        assign(getInternals(this), { button, changes, element: this, slot, style });
    },

    load: function(shadow) {
        // If the element is identified by the location hash, open the element
        const hash = window.location.hash;
        if (hash && /^#\S+$/.test(hash) && this.id === hash.slice(1)) {
            this.open = true;
        }
    }
};
