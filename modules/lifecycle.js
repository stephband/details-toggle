
import create      from '../../dom/modules/create.js';
import events      from '../../dom/modules/events.js';
import styles      from '../../dom/modules/styles.js';
import Distributor from '../../dom/modules/distributor.js';
import { px }      from '../../dom/modules/parse-length.js';
import { getInternals } from '../../dom/modules/element.js';

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
    construct: function(shadow) {
        /*
        Create a DOM of the form:
        <link rel="stylesheet" href="/source/bolt/elements/overflow-toggle.shadow.css" />
        <slot name="summary">
            <button></button>
        </slot>
        <slot></slot>
        */

        const style   = styles(':host', shadow)[0];
        const slot    = create('slot', { part: 'content' });
        const summary = create('slot', { name: 'summary' });
        const button  = create('button', { type: "button", html: "Open" });

        summary.append(button);
        shadow.append(summary, slot);

        const changes = events('slotchange', slot);

        events('click', summary).each((e) => this.open = !this.open);

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
