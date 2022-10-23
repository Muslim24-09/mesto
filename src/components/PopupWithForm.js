import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {

  _popupForm
  _inputList
  _handleFormSubmit
  _formValues

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this.popup.querySelector(".form");
    this._inputList = this._popupForm.querySelectorAll(".form__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
