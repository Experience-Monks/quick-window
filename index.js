var applySelectorAndCss = require('apply-selector-and-css');

var defaultCSS = require('./css');

module.exports = function(options) {

  options = options || {};
  options.container = options.container || document.body;
  options.css = options.css === undefined ? defaultCSS : options.css;

  var applyCSS = applySelectorAndCss(options.css);
  var container = document.createElement('div');
  var topBar = document.createElement('div');

  applyCSS(container, '.window');
  applyCSS(topBar, '.topBar');

  container.appendChild(topBar);
  options.container.appendChild(container);

  topBar.addEventListener('mousedown', function(ev) {

    var parent = container.parentNode;
    var offX = ev.clientX - container.offsetLeft - parent.offsetLeft;
    var offY = ev.clientY - container.offsetTop - parent.offsetTop;

    var onMouseMove = function(ev) {
      var x = ev.pageX - parent.offsetLeft - offX;
      var y = ev.pageY - parent.offsetTop - offY;

      container.style.left = x + 'px';
      container.style.top = y + 'px';
    };
    var onMouseUp = function(ev) {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };

    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
  });

  return {
    container: container,
    destroy: function() {
      container.parentNode.removeChild(container);
    }
  };
};