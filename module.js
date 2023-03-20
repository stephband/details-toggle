
/** Installation

Download the latest release:

[github.com/stephband/details-toggle/releases](https://github.com/stephband/details-toggle/releases)

Include the JS and CSS files:

```html
<link rel="stylesheet" href="./details-toggle.css" />
<script type="module" src="./details-toggle.js"></script>
```
**/


/** Usage

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

A `details-toggle` is collapsed by default.
**/

import element    from '../dom/modules/element.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

const stylesheet =
    window.overflowToggleStylesheet ||
    import.meta.url.replace(/\/[^\/]*([?#].*)?$/, '/') + 'shadow.css';

export default element('<details-toggle>', lifecycle, properties, stylesheet);
