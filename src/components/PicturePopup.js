// Класс PopupWithImage, который наследует от Popup.
// Этот класс должен перезаписывать родительский метод open.
// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.


import {Popup} from "./Popup.js";

export class PicturePopup extends Popup {

    _popupImageLink;
    _popupImageTitle;

    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageLink = this.popup.querySelector('.popup__pictures');
        this._popupImageTitle = this.popup.querySelector('.popup__pictures-title');
    }

    open({ name, link }) {
        this._popupImageLink.src = link;
        this._popupImageLink.alt = name;
        this._popupImageTitle.textContent = name;
        super.open();
    }
}
