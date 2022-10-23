import { Popup } from "./Popup.js";

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
