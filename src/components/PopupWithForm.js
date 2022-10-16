// Класс PopupWithForm, наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners.
// Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия,
//  но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.


import {Popup} from "./Popup.js";

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

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
          this._formValues[input.id] = input.value
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.popup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}
