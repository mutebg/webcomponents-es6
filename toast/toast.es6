class Toast {

  constructor () {
    this.view = document.querySelector('.toast');
    this.hideTimeout = 0;
    this.hideBound = this.hide.bind(this);
  }

  toast (message) {

    this.view.textContent = message;
    this.view.classList.add('toast--visible');

    clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(this.hideBound, 5000);
  }

  hide () {
    this.view.classList.remove('toast--visible');
  }
}

