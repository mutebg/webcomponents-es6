'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Carousel = (function () {
    function Carousel() {
        var _this = this;

        _classCallCheck(this, Carousel);

        this.wrapper = document.querySelector('.carousel__wrapper');
        this.totalItems = document.querySelectorAll('.carousel__item').length;
        this.currentPage = 1;

        this.totalPages = Math.ceil(this.totalItems / 4);
        console.log(this.totalPages);
        this.prevBtn = document.querySelector('.carousel__btn--prev');
        this.nextBtn = document.querySelector('.carousel__btn--next');

        var prev = function prev(e) {
            if (_this.currentPage > 1) {
                _this.currentPage--;
                _this.move();
            }
        };

        var next = function next(e) {
            if (_this.currentPage < _this.totalPages) {
                _this.currentPage++;
                _this.move();
            }
        };

        this.prevBtn.addEventListener('click', prev);
        this.nextBtn.addEventListener('click', next);
    }

    _createClass(Carousel, [{
        key: 'move',
        value: function move() {
            if (this.currentPage === 1) {
                this.prevBtn.classList.add('hide');
            }
            if (this.currentPage === 2) {
                this.prevBtn.classList.remove('hide');
            }

            if (this.currentPage === this.totalPages) {
                this.nextBtn.classList.add('hide');
            }

            if (this.currentPage === this.totalPages - 1) {
                this.nextBtn.classList.remove('hide');
            }

            var x = (this.currentPage * 400 - 400) * -1;
            this.wrapper.style.transform = 'translateX(' + x + 'px)';
        }
    }]);

    return Carousel;
})();