import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._image = this._popupElement.querySelector('.modal__img');
        this._caption = this._popupElement.querySelector('.modal__caption');
    }

    open({ link, name }) {
        this._image.src = link;
        this._image.alt = name;
        this._caption.textContent = name;

        super.open();
    }

}   

export default PopupWithImage;