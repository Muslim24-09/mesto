export class Card {
  _templateSelector;
  _cardElement;

  _cardId;
  _myId;
  _likes;
  _ownerId;
  _isMyOwnCard;
  _handleCardClick;
  _handleOpenPopupConfirm;
  _handleCardLike;

  _elementTitle;
  _elementImage;
  _elementLikeButton;
  _counterLikes;
  _elementDeleteButton;

  constructor(data, myId, templateSelector, handleCardClick, handleOpenPopupConfirm, handleCardLike) {
    this._imgSrc = data.link;
    this._name = data.name;
    this._likes = data.likes; // массив
    this._myId = myId
    this._ownerId = data.owner._id;
    this.cardId = data._id;

    this._isMyOwnCard = this._myId === this._ownerId

    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
    this._handleOpenPopupConfirm = handleOpenPopupConfirm;
    this._handleCardLike = handleCardLike;
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._elementImage = this._cardElement.querySelector('.element__image')
    this._elementTitle = this._cardElement.querySelector('.element__title');
    this._elementLikeButton = this._cardElement.querySelector(".element__like-button");
    this._counterLikes = this._cardElement.querySelector('.element__counter-likes');
    this._elementDeleteButton = this._cardElement.querySelector(".element__delete-button");

    this._elementImage.src = this._imgSrc;
    this._elementImage.alt = `Фотография: ${this._name}`;
    this._elementTitle.textContent = this._name;

    this.myLike = this._likes.some((like) => like._id === this._myId)
    this._counterLikes.textContent = this._likes.length

    if (!!this.myLike) {
      this._elementLikeButton.classList.add('element__like-button_active')
    }

    this._setEventListeners();
    return this._cardElement;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
  }


  likeHandler(value) {
    this._elementLikeButton.classList.add('element__like-button_active')
    this._counterLikes.textContent = value;
    this.myLike = true;
  }

  dislikeHandler(value) {
    this._elementLikeButton.classList.remove('element__like-button_active')
    this._counterLikes.textContent = value;
    this.myLike = false;
  }

  removeHandler() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this)
    })
    this._elementLikeButton.addEventListener('click', () => {
      console.log(22222, this);
      this._handleCardLike(this)
    })
    if (!this._isMyOwnCard) {
      this._elementDeleteButton.remove()
      this._elementDeleteButton = null
    } else {
      this._elementDeleteButton.addEventListener('click', () => {
        this._handleOpenPopupConfirm(this)
      })
    }
  }
}
