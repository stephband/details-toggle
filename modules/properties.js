
import { trigger }   from '../../dom/modules/trigger.js';
import { px, rem }   from '../../dom/modules/parse-length.js';
import config, { $ } from './config.js';

export default {
    show: {
        /**
        show="Show"
        Text rendered into the toggle button when `overflow-toggle` is in
        `open=false` state. Defaults to `"Show"`.
        **/

        attribute: function(value) {
            const view = this[$];
            view.showText = value || config.showText;
            if (view.open) { return; }
            view.button.textContent = value || config.showText ;
        }
    },

    hide: {
        /**
        hide="Hide"
        Text rendered into the toggle button when `overflow-toggle` is in
        `open=true` state. Defaults to `"Hide"`.
        **/

        attribute: function(value) {
            const view = this[$];
            view.hideText = value || config.hideText;
            if (!view.open) { return; }
            view.button.textContent = value || config.hideText ;
        }
    },

    open: {
        /**
        open=""
        A boolean attribute describing the state of the `overflow-toggle`.
        **/

        attribute: function(value) {
            this.open = value !== null;
        },

        /**
        .open = false
        A boolean property describing the state of the `overflow-toggle` – `true`
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
            const view = this[$];
            return view.open;
        },

        set: function(value) {
            const view = this[$];
            const { button, slot, style } = view;

             // If toggle has not changed do nothing
            if (!!value === view.open) {
                return;
            }

            if (value) {
                const scrollHeight    = slot.scrollHeight;
                const computedElement = getComputedStyle(this);
                const computedButton  = getComputedStyle(button);
                const maxHeight = scrollHeight
                    // plus button height
                    + button.clientHeight
                    // plus button margins
                    + px(computedButton['margin-top'] || 0)
                    + px(computedButton['margin-bottom'] || 0)
                    // plus a sneaky safety margin, no-one will notice
                    + 8 ;

                // Store maxHeight while element is open
                view.maxHeight = computedElement['max-height'];
                view.maxHeight = view.maxHeight === 'none' ? 0 : view.maxHeight ;
                style.setProperty('max-height', rem(maxHeight) + 'rem', 'important');
                button.textContent = view.hideText;

                // We have to set state on the view AND on the attribute
                // if we want it to update
                view.open = true;
                this.setAttribute('open', '');
                trigger('overflow-activate', this);
            }
            else {
                view.maxHeight = undefined;
                style.setProperty('max-height', '');
                button.textContent = view.showText;

                // We have to set state on the view AND on the attribute
                // if we want it to update
                view.open = false;
                this.removeAttribute('open');
                trigger('overflow-deactivate', this);
            }
        }
    }
};
