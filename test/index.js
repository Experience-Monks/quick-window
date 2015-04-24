var quickWindow = require('./..');
var quickToolbar = require('quick-toolbar');

var container = document.createElement('div');
document.body.appendChild(container);

container.style.position = 'absolute';
container.style.left = '100px';
container.style.top = '100px';

var win = quickWindow( {
  container: container
});

var toolBar = quickToolbar({
  container: win.container
});

toolBar.addFromText('0');
toolBar.addFromText('1');
toolBar.addFromText('2');