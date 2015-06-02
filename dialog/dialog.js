'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Dialog = (function () {
    function Dialog() {
        _classCallCheck(this, Dialog);

        this.view = document.querySelector('.js-dialog');
        this.title = this.view.querySelector('.js-title');
        this.message = this.view.querySelector('.js-message');
        this.cancelButton = this.view.querySelector('.js-cancel');
        this.okayButton = this.view.querySelector('.js-okay');
    }

    _createClass(Dialog, [{
        key: 'show',
        value: function show(title, message, hideCancel) {
            var _this = this;

            this.title.textContent = title;
            this.message.textContent = message;
            this.view.classList.add('dialog-view--visible');

            if (hideCancel) {
                this.cancelButton.classList.add('hidden');
            } else {
                this.cancelButton.classList.remove('hidden');
            }

            return new Promise(function (resolve, reject) {

                var removeEventListenersAndHide = function removeEventListenersAndHide() {
                    _this.cancelButton.removeEventListener('click', onCancel);
                    _this.okayButton.removeEventListener('click', onOkay);
                    _this.view.classList.remove('dialog-view--visible');
                };

                var onCancel = function onCancel(e) {
                    removeEventListenersAndHide();
                    reject();
                };

                var onOkay = function onOkay(e) {
                    removeEventListenersAndHide();
                    resolve();
                };

                _this.cancelButton.addEventListener('click', onCancel);
                _this.okayButton.addEventListener('click', onOkay);
            });
        }
    }]);

    return Dialog;
})();