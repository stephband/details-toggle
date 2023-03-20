
import events      from '../../dom/modules/events.js';
import { trigger } from '../../dom/modules/trigger.js';
import { px }      from '../../dom/modules/parse-length.js';
import { getInternals } from '../../dom/modules/element.js';


function open(host, element) {
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

function close(host, element) {
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

    requestAnimationFrame(() => {
        element.style.transition    = '';
        element.style.maxHeight     = '';
        element.style.paddingBottom = '';
        element.style.marginBottom  = '';
    });
}

export default {
    open: {
        /**
        open=""
        A boolean attribute describing the state of the `overflow-toggle`.
        **/

        attribute: function(value) {
            this.open = value !== null;
        },

        /**
        .open=false
        A boolean property describing the state of the `overflow-toggle`: `true`
        when the `overflow-toggle` is open, `false` when it is not.
        **/

        /**
        'overflow-activate'
        Sent from `overflow-toggle` when opened.
        **/

        /**
        'overflow-deactivate'
        Sent from `overflow-toggle` when closed.
        **/

        get: function() {
            const state = getInternals(this);
            return state.open;
        },

        set: function(value) {
            const state = getInternals(this);
            const { button, slot, style } = state;

             // If toggle has not changed do nothing
            if (!!value === state.open) {
                return;
            }

            if (value) {
                state.open = true;
                open(this, slot);
                trigger('overflow-activate', this);
            }
            else {
                state.open = false;
                close(this, slot);
                trigger('overflow-deactivate', this);
            }
        }
    }
};
