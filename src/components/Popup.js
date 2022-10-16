// Класс Popup, отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.


export class Popup {

  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
    this.handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this.popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
        this.close();
      }
    });
  }

  open() {
    this.popup.classList.add("popup_opened");
    document.addEventListener("keydown", this.handleEscClose);
  }

  close() {
    this.popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.handleEscClose);
  }
}
