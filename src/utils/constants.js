// карточки "из коробки"
export const addingPictures = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// html классы для валидации
export const formData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  saveButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  formError: '.form__error'
};


export const editorBtn = document.querySelector('.profile__edit-button')
export const nameInput = document.querySelector('.form__input_type_name')
export const aboutInput = document.querySelector('.form__input_type_about')
export const formProfile = document.querySelector('.form_profile')
export const formCard = document.querySelector('.form_card')
export const formCreator = document.querySelector('[name="add__profile"]')
export const profileName = document.querySelector('.profile__name')
export const profileAbout = document.querySelector('.profile__about')

export const addtBtn = document.querySelector('.profile__add-button')

export const titlePic = document.querySelector('.popup__pictures-title')
export const picturesPopup = document.querySelector('.popup__pictures')
