
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

import events     from 'dom/events.js';
import element    from 'dom/element-1.js';
import lifecycle  from './modules/lifecycle.js';
import properties from './modules/properties.js';

const stylesheet =
    window.detailsToggleStylesheet ||
    import.meta.url.replace(/\/[^\/]*([?#].*)?$/, '/') + 'shadow.css';

export default element('<details-toggle>', lifecycle, properties, stylesheet);
