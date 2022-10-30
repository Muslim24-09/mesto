import { Popup } from './Popup';

export class PopupConfirm extends Popup {

  _popupForm;
  _handleFormSubmit;
  _item;
  _buttonSubmit;
  _defaultBtnName;

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this.popup.querySelector('.form');
    this._handleFormSubmit = handleFormSubmit;
    this._buttonSubmit = this._popupForm.querySelector('.form__save-button')
    this._defaultBtnName = this._buttonSubmit.textContent

  }

  open(item) {
    super.open();
    this._item = item
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener('submit', (ev) => {
      ev.preventDefault();
      this._handleFormSubmit(this._item)
      })
  }

  renderLoader(isLoader) {
    if (isLoader) {
      this._buttonSubmit.textContent = 'Deleting...'
    } else {
      this._buttonSubmit.textContent = this._defaultBtnName;
    }
  }
}