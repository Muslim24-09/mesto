export class Card {
  _imgSrc;
  _title;

  _templateSelector;

  _showPopupHandler;

  _cardElement;
  _likeBtn;

  constructor(imgSrc, title, templateSelector, showPopupHandler) {
    this._imgSrc = imgSrc;
    this._title = title;

    this._templateSelector = templateSelector;

    this._showPopupHandler = showPopupHandler;
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    const cardImage = this._cardElement.querySelector('.element__image');
    cardImage.src = this._imgSrc;
    cardImage.alt = `Фотография: ${this._title}`;
    cardImage.addEventListener('click', () => this._showPopupHandler(this._title, this._imgSrc));

    const cardTitle = this._cardElement.querySelector('.element__title');
    cardTitle.textContent = this._title;

    this._likeBtn = this._cardElement.querySelector(".element__like-button");
    this._likeBtn.addEventListener("click", () => this._likeHandler());

    const deleteBtn = this._cardElement.querySelector(".element__delete-button");
    deleteBtn.addEventListener("click", () => this._removeHandler());

    return this._cardElement;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    return cardElement;
  }

  _likeHandler() {
    this._likeBtn.classList.toggle('element__like-button_active');
  }

  _removeHandler() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
