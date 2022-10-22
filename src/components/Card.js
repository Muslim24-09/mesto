export class Card {
  _imgSrc;
  _title;
  _templateSelector;
  _showPopupHandler;
  _cardElement;
  _likeBtn;
  _cardImage;
  _deleteBtn;

  constructor(data, templateSelector, handleCardClick) {
    this._imgSrc = data.link;
    this._title = data.name;
    this._templateSelector = templateSelector;
    this._showPopupHandler = handleCardClick;
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._cardImage = this._cardElement.querySelector('.element__image');
    this._deleteBtn = this._cardElement.querySelector(".element__delete-button");

    this._cardImage.src = this._imgSrc;
    this._cardImage.alt = `Фотография: ${this._title}`;

    const cardTitle = this._cardElement.querySelector('.element__title');
    cardTitle.textContent = this._title;

    this._likeBtn = this._cardElement.querySelector(".element__like-button");

    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._showPopupHandler(this._title, this._imgSrc));
    this._deleteBtn.addEventListener("click", () => this._removeHandler());
    this._likeBtn.addEventListener("click", () => this._likeHandler());
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
