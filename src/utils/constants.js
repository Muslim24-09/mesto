export const authorisationData = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52', options: {
    authorization: '4d3c9e1d-cc98-4110-97fa-b50511b9880a',
    'Content-Type': 'application/json'
  }
}

// html классы для валидации
export const formData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  saveButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  formError: '.form__error'
};

// попап профиля
export const popupProfile = document.getElementById('popup-profile')
export const editorBtn = document.querySelector('.profile__edit-button')
export const nameInput = document.querySelector('.form__input_type_name')
export const aboutInput = document.querySelector('.form__input_type_about')

// редактирование аватара

export const profileAvatarBtn = document.querySelector('.profile__avatar-btn')
export const popupChangeAvatar = document.querySelector('.popup_change-avatar')
export const formChangeAvatar = document.querySelector('.form_change-avatar')


// форма попапа



// форма добавления новой карточки

export const popupAddItem = document.getElementById('popup-action')


// форма редактирования профиля

export const formProfile = document.querySelector('.form_profile')

// форма редактирования карточки
export const formCard = document.querySelector('.form_card')
export const addtBtn = document.querySelector('.profile__add-button')


export const formCreator = document.querySelector('[name="add__profile"]')
// export const profileName = document.querySelector('.profile__name')
// export const profileAbout = document.querySelector('.profile__about')


export const titlePic = document.querySelector('.popup__pictures-title')
export const picturesPopup = document.querySelector('.popup__pictures')

