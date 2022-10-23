export class Card {
  _data;
  _templateSelector;
  _handleCardClick;
  _cardElement;

  constructor(data, templateSelector, handleCardClick) {
    this._imgSrc = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._showPopupHandler = handleCardClick;
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    const cardImage = this._cardElement.querySelector('.element__image');
    cardImage.src = this._imgSrc;
    cardImage.alt = `Фотография: ${this._name}`;
    this._cardElement.querySelector('.element__title').textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _likeHandler() {

    this._cardElement.querySelector(".element__like-button").classList.toggle('element__like-button_active');
  }

  _removeHandler() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__image').addEventListener('click', () => {
      this._showPopupHandler(this._name, this._imgSrc)
    })
    this._cardElement.querySelector(".element__like-button").addEventListener('click', () => {
      this._likeHandler()
    })
    this._cardElement.querySelector(".element__delete-button").addEventListener('click', () => {
      this._removeHandler()
    })
  }
}

