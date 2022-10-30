import {Popup} from "./Popup.js";

export class PicturePopup extends Popup {

    _popupImageLink;
    _popupImageTitle;

    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageLink = this.popup.querySelector('.popup__pictures');
        this._popupImageTitle = this.popup.querySelector('.popup__pictures-title');
    }

  open({...item}) {
        this._popupImageLink.src = item._imgSrc;
        this._popupImageLink.alt = item._name;
        this._popupImageTitle.textContent = item._name;
        super.open();
    }
}
