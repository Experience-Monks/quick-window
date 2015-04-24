# quick-window

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

![preview](https://raw.githubusercontent.com/Jam3/quick-window/master/preview.gif)

Create a quick "window" you can drag content around the window with.

## Usage

[![NPM](https://nodei.co/npm/quick-window.png)](https://www.npmjs.com/package/quick-window)

```javascript
var quickWindow = require('quick-window');

var win = quickWindow();

var el = document.createElement('div');
el.innerHTML = 'hello world';

win.container.appendChild(el);
```

### Constructing `quickToolbar()`

You can pass in a couple of options when constructing a `quick-window`.

```javascript
quickToolbar({
    // this is the parent container that the quick-toolbar will be made in
    container: document.body,

    // this is the css that will be applied to the quick toolbars elements
    // if css === undefined then the following properties are used
    // if css === false then NO inline css is applied through JS
    css: {
      '.window': {
        position: 'absolute',
        display: 'inline-block',
        '-ms-user-select': 'none',
        '-moz-user-select': 'none',
        '-webkit-user-select': 'none',
        'user-select': 'none'
      },

      '.topBar': {
        width: '100%',
        height: '10px',
        background: '#333',
        cursor: 'move'
      }
    }
});
```

## License

MIT, see [LICENSE.md](http://github.com/mikkoh/quick-window/blob/master/LICENSE.md) for details.
