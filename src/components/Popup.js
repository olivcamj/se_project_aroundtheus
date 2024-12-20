class Popup {
    constructor(popupSelector) {
        this._popupElement = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open(){
        this._popupElement.classList.add('modal_visible');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close(){
        this._popupElement.classList.remove('modal_visible');
        document.removeEventListener('keyup', this._handleEscClose)
    }

    _handleEscClose(e) {
        const ESC = 27;
        if (e.which === ESC){
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement
        .querySelector('.modal__closeBtn')
        .addEventListener('click', () => {
            this.close();
        });

        this._popupElement.addEventListener('click', (e) => {
            if (!e.target.closest('.modal__content')) {
                this.close();
            }

        })
    }
}

export default Popup;