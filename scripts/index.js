const popup = document.querySelector('.popup')
const popupProfile = document.querySelector('#popup-profile')
const editorBtn = document.querySelector('.profile__edit-button')
const nameInput = document.querySelector('.form__input_type_name')
const aboutInput = document.querySelector('.form__input_type_about')
const formEditor = document.querySelector('.form')
const formCreator = document.querySelector('[name="add__profile"]')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
const elements = document.querySelector('.elements')
const popupAction = document.querySelector('#popup-action')
const addtBtn = document.querySelector('.profile__add-button')
const formSaveButton = document.querySelector('.form__save-button');
const titleInput = document.querySelector('.form__input_type_title')
const linkInput = document.querySelector('.form__input_type_link')
const popupPictures = document.querySelector('#pictures-popup')
const picturesBtn = document.querySelector('.element__image')
const contPic = document.querySelector('.popup__container_pictures')
const titlePic = document.querySelector('.popup__pictures-title')
const pictures = document.querySelector('.popup__pictures')


const formData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  saveButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
}


const disableSubmitButton = (openedPopup) => {
  const cardSaveButton = openedPopup.querySelector(".form__save-button")
  cardSaveButton.classList.add("form__save-button_disabled")
}

const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

nameInput.defaultValue = profileName.textContent
aboutInput.defaultValue = profileAbout.textContent

editorBtn.addEventListener('click', function () {
  openPopup(popupProfile)

  nameInput.value = profileName.textContent
  aboutInput.value = profileAbout.textContent

  disableSubmitButton(popupProfile)
  restartFormState(popupProfile, formData);
})

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

formEditor.addEventListener('submit', function (e) {
  e.preventDefault();
  profileAbout.textContent = e.target.elements.about.value
  profileName.textContent = e.target.elements.name.value
  closePopup(popupProfile)
})

addtBtn.addEventListener('click', function () {
  openPopup(popupAction);

  disableSubmitButton(popupAction)
  restartFormState(popupAction, formData);
})

function cardCreater(data) {
  const cardTemplate = document.querySelector('.element__template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardTitle = cardElement.querySelector('.element__title');

  const likeBtn = cardElement.querySelector(".element__like-button")
  const deleteBtn = cardElement.querySelector(".element__delete-button")
  const cardImage = cardElement.querySelector('.element__image');

  cardImage.src = data.link;
  cardImage.alt = `Фотография: ${data.name}`
  cardTitle.textContent = data.name;

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle('element__like-button_active')
  })
  deleteBtn.addEventListener("click", () => {
    cardElement.remove()
  })
  cardImage.addEventListener("click", () => {
      openPopup(popupPictures)

      titlePic.textContent = data.name
      pictures.src = data.link
      pictures.alt = `Фотография: ${data.name}`
  })

  return cardElement;
}

formCreator.addEventListener('submit', function addCard(event) {
  event.preventDefault()
  const myCard = {
    name: event.target.elements.title.value,
    link: event.target.elements.link.value
  }
  const card = cardCreater(myCard)

  elements.prepend(card)
  event.target.reset()
  closePopup(popupAction)
})
for (let i = 0; i < addingPictures.length; i += 1) {
  elements.append(cardCreater(addingPictures[i]))
}

enableValidation(formData);
