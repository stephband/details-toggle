
/** Installation

Download the latest release:

[github.com/stephband/overflow-toggle/releases](https://github.com/stephband/overflow-toggle/releases)

Include the JS and CSS files:

```html
<link rel="stylesheet" href="./overflow-toggle.css" />
<script type="module" src="./overflow-toggle.js"></script>
```
**/


/** <overflow-toggle>

Import `<overflow-toggle>` custom element. This also registers the custom
element and upgrades instances already in the DOM.

```html
<script type="module" src="bolt/elements/overflow-toggle.js"></script>

<overflow-toggle show="Show" hide="Hide">
    Crunchum ipsum dolor sit coder void, constructor function, sed do while loop
    python orientation semi colon incident. Duis aute irure indent tabs or spaces
    velit esse cilium buntum how crunchy duntum. Excepteur tranquilis syntax
    error memorandum qui officia nostrud operating system alertus. Hyper text
    linkus operari avec computatrum ad coniungere hominum. Standards code est
    pulchra on chromium et foxus sed souvent suckum in internet explorum.
</overflow-toggle>
```

An `overflow-toggle` is collapsed by default to it's own `max-height`. The
default `max-height` of an `overflow-toggle` is `7.5rem` (`120px`). When toggled
open, that `max-height` is overridden to include the whole height of the
content, and the state is transitioned from closed to open via CSS.
**/

import element    from '../dom/modules/element.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

const stylesheet =
    // Support the old path system baked into the Nendaz project
    //window.customElementStylesheetPath && window.customElementStylesheetPath + 'overflow-toggle-shadow.css' ||
    window.overflowToggleStylesheet ||
    import.meta.url.replace(/\/[^\/]*([?#].*)?$/, '/') + 'overflow-toggle-shadow.css';

export default element('<overflow-toggle>', lifecycle, properties, stylesheet);

// Log registration to console
window.console && window.console.log('%c<overflow-toggle>%c registered (docs at %chttps://stephen.band/overflow-toggle/%c)', 'color: #3a8ab0; font-weight: 600;', 'color: #888888; font-weight: 400;', 'color: inherit; font-weight: 400;', 'color: #888888; font-weight: 400;');
