export class Card {
  _imgSrc;
  _title;

  _templateSelector;

  _showPopupHandler;

  constructor(imgSrc, title, templateSelector, showPopupHandler) {
    this._imgSrc = imgSrc;
    this._title = title;

    this._templateSelector = templateSelector;

    this._showPopupHandler = showPopupHandler;
  }

  generateCard() {
    const cardElement = this._getTemplate();

    const cardImage = cardElement.querySelector('.element__image');
    cardImage.src = this._imgSrc;
    cardImage.alt = `Фотография: ${this._title}`;
    cardImage.addEventListener('click', this._showPopupHandler);

    const cardTitle = cardElement.querySelector('.element__title');
    cardTitle.textContent = this._title;

    const likeBtn = cardElement.querySelector(".element__like-button");
    likeBtn.addEventListener("click", this._likeHandler);

    const deleteBtn = cardElement.querySelector(".element__delete-button");
    deleteBtn.addEventListener("click", this._removeHandler);

    return cardElement;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    return cardElement;
  }

  _likeHandler() {
    this.classList.toggle('element__like-button_active');
  }

  _removeHandler() {
    this.parentElement.remove()
  }
}
