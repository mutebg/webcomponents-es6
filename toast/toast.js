'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Toast = (function () {
  function Toast() {
    _classCallCheck(this, Toast);

    this.view = document.querySelector('.toast');
    this.hideTimeout = 0;
    this.hideBound = this.hide.bind(this);
  }

  _createClass(Toast, [{
    key: 'toast',
    value: function toast(message) {

      this.view.textContent = message;
      this.view.classList.add('toast--visible');

      clearTimeout(this.hideTimeout);
      this.hideTimeout = setTimeout(this.hideBound, 5000);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.view.classList.remove('toast--visible');
    }
  }]);

  return Toast;
})();