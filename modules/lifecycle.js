
import create           from 'dom/create.js';
import events           from 'dom/events.js';
import styles           from 'dom/styles.js';
import Distributor      from 'dom/distributor.js';
import { px }           from 'dom/parse-length.js';
import { getInternals } from 'dom/element.js';

const assign = Object.assign;

function update(shadow, button, scrollHeight, maxHeight, slot, state) {
    if (scrollHeight > maxHeight) {
        if (!state) {
            //shadow.appendChild(button);
            //slot.classList.add('buttoned');
        }
        return true;
    }

    if (state) {
        //button.remove();
        //slot.classList.remove('buttoned');
    }

    return false;
}

export default {
    mode: 'closed',
    focusable: true,
    construct: function(shadow) {
        /*
        Create a DOM of the form:
        <link rel="stylesheet" href="/source/bolt/elements/details-toggle.shadow.css" />
        <slot name="summary">
            <button></button>
        </slot>
        <slot></slot>
        */

        const style   = styles(':host', shadow)[0];
        const slot    = create('slot', { part: 'content' });
        const summary = create('slot', { part: 'summary', name: 'summary' });
        const button  = create('button', { type: "button", html: "Open" });

        summary.append(button);
        shadow.append(summary, slot);

        const changes = events('slotchange', slot);

        events('click', summary).each((e) => {
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

    /*load: function(shadow) {
        const view  = getInternals(this);
        const { button, slot } = view;
        const style = getComputedStyle(this);
        const maxHeight = px(view.maxHeight || style['max-height'] || 0);

        // maxHeight is cached on view when element is open
        var state = update(shadow, button, slot.scrollHeight, maxHeight, slot, false);

        events('resize', window)
        .each((e) => {
            const maxHeight = px(view.maxHeight || style['max-height'] || 0);
            state = update(shadow, button, slot.scrollHeight, maxHeight, slot, state);
        });
    }*/
};
