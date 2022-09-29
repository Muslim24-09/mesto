import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const addingPictures = [
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

const popupProfile = document.querySelector('#popup-profile')
const editorBtn = document.querySelector('.profile__edit-button')
const nameInput = document.querySelector('.form__input_type_name')
const aboutInput = document.querySelector('.form__input_type_about')
const formProfile = document.querySelector('.form_profile')
const formCard = document.querySelector('.form_card')
const formCreator = document.querySelector('[name="add__profile"]')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
const elementsContainer = document.querySelector('.elements')
const popupAction = document.querySelector('#popup-action')
const addtBtn = document.querySelector('.profile__add-button')
const popupPictures = document.querySelector('#pictures-popup')
const titlePic = document.querySelector('.popup__pictures-title')
const picturesPopup = document.querySelector('.popup__pictures')


const formData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  saveButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  formError: '.form__error'
}

const profileValidator = new FormValidator(formData, formProfile)
profileValidator.enableValidation()

const cardValidator = new FormValidator(formData, formCard)
cardValidator.enableValidation()

// функция закрытия попапа клавишей escape
const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
//функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}


//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);

  profileValidator.restartFormState(popupProfile);
  cardValidator.restartFormState(popupAction);

  formCard.reset();

}

//фукция открытия попапа профиля по клику
editorBtn.addEventListener('click', function () {
  openPopup(popupProfile)

  nameInput.value = profileName.textContent
  aboutInput.value = profileAbout.textContent
})

//функция закрытия попапа по клику
const popupCloseClick = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target == evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
        closePopup(evt.currentTarget);
      }
    })
  })
}
popupCloseClick();


formProfile.addEventListener('submit', function (e) {
  e.preventDefault();
  profileAbout.textContent = aboutInput.value
  profileName.textContent = nameInput.value
  closePopup(popupProfile)
})

addtBtn.addEventListener('click', function () {
  openPopup(popupAction);
  profileValidator.restartFormState(popupAction);
  cardValidator.restartFormState(popupAction);

})

const showPopupHandler = (name, link) => {
  openPopup(popupPictures);
  titlePic.textContent = name;
  picturesPopup.src = link;
  picturesPopup.alt = `Фотография: ${name}`;
}

function createCard(data) {
  const card = new Card(data.link, data.name, '.element__template', showPopupHandler)
  return card.generateCard();
}

formCreator.addEventListener('submit', function addCard(event) {
  event.preventDefault()
  const myCard = {
    name: event.target.elements.title.value,
    link: event.target.elements.link.value
  }
  const card = createCard(myCard)

  elementsContainer.prepend(card)
  event.target.reset()
  closePopup(popupAction)
})

for (let i = 0; i < addingPictures.length; i += 1) {
  elementsContainer.append(createCard(addingPictures[i]))
}
