class Carousel {

    constructor() {
        this.wrapper = document.querySelector('.carousel__wrapper');
        this.totalItems = document.querySelectorAll('.carousel__item').length;
        this.currentPage = 1;

        this.totalPages = Math.ceil(this.totalItems / 4);
        console.log(this.totalPages);
        this.prevBtn = document.querySelector('.carousel__btn--prev');
        this.nextBtn = document.querySelector('.carousel__btn--next');

        var prev = (e) => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.move();
            }
        }

        var next = (e) => {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.move();
            }
        }


        this.prevBtn.addEventListener('click', prev );
        this.nextBtn.addEventListener('click', next );

    }



    move() {
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
}