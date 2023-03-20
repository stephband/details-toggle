
/** Installation

Download the latest release:

[github.com/stephband/details-toggle/releases](https://github.com/stephband/details-toggle/releases)

Include the JS and CSS files:

```html
<link rel="stylesheet" href="./details-toggle.css" />
<script type="module" src="./details-toggle.js"></script>
```
**/


/** <details-toggle>

Import `<details-toggle>` custom element. This registers the custom element and
upgrades instances already in the DOM.

```html
<script type="module" src="bolt/elements/details-toggle.js"></script>
```

Use it thus:

```html
<details-toggle>
    <h4 slot="summary">Crunchum ipsum</h4>
    Crunchum ipsum dolor sit coder void, constructor function, sed
    do while loop python orientation semi colon incident. Duis aute
    irure indent tabs or spaces velit esse cilium buntum how crunchy
    duntum. Excepteur tranquilis syntax error memorandum qui officia
    nostrud operating system alertus.
</details-toggle>
```

An `details-toggle` is collapsed by default to it's own `max-height`. The
default `max-height` of an `details-toggle` is `7.5rem` (`120px`). When toggled
open, that `max-height` is overridden to include the whole height of the
content, and the state is transitioned from closed to open via CSS.
**/

import element    from '../dom/modules/element.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

const stylesheet =
    window.overflowToggleStylesheet ||
    import.meta.url.replace(/\/[^\/]*([?#].*)?$/, '/') + 'shadow.css';

export default element('<details-toggle>', lifecycle, properties, stylesheet);
