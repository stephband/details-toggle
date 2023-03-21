
/** Install

Download the latest release:

[github.com/stephband/details-toggle/releases](https://github.com/stephband/details-toggle/releases)

Include the JS and CSS files:

```html
<link rel="stylesheet" href="./details-toggle.css" />
<script type="module" src="./details-toggle.js"></script>
```
**/


/** Use

A `details-toggle` is collapsed to the height of its `slot="summary"` content by
default, and opens to display all content when the summary content is clicked.

```html
<details-toggle>
    <h4 slot="summary">Crunchum ipsum</h4>
    Crunchum ipsum dolor sit coder void, constructor function, sed
    do while loop python orientation semi colon incident. Duis aute
    irure indent tabs or spaces velit esse cilium buntum how crunchy
    duntum.
</details-toggle>
```
**/

import element    from '../dom/modules/element.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

const stylesheet =
    window.detailsToggleStylesheet ||
    import.meta.url.replace(/\/[^\/]*([?#].*)?$/, '/') + 'shadow.css';

export default element('<details-toggle>', lifecycle, properties, stylesheet);
