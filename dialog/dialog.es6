class Dialog {

    constructor() {
        this.view = document.querySelector('.js-dialog');
        this.title = this.view.querySelector('.js-title');
        this.message = this.view.querySelector('.js-message');
        this.cancelButton = this.view.querySelector('.js-cancel');
        this.okayButton = this.view.querySelector('.js-okay');
    }

    show(title, message, hideCancel) {

        this.title.textContent = title;
        this.message.textContent = message;
        this.view.classList.add('dialog-view--visible');

        if ( hideCancel ) {
            this.cancelButton.classList.add('hidden');
        } else {
            this.cancelButton.classList.remove('hidden');
        }

        return new Promise((resolve, reject) => {

            var removeEventListenersAndHide = () => {
                this.cancelButton.removeEventListener('click', onCancel);
                this.okayButton.removeEventListener('click', onOkay);
                this.view.classList.remove('dialog-view--visible');
            }

            var onCancel = (e) => {
                removeEventListenersAndHide();
                reject();
            }

            var onOkay = (e) => {
                removeEventListenersAndHide();
                resolve();
            }

            this.cancelButton.addEventListener('click', onCancel);
            this.okayButton.addEventListener('click', onOkay);
        });
    }

}