const popup = document.querySelectorAll('.popup')
const popupProfile = document.querySelector('#popup-profile')
const editBtn = document.querySelector('.profile__edit-button')
const closeBtn = document.querySelector('.popup__close-button')
const formSaveButton = document.querySelector('.form__save-button');
const closeBtnAction = document.querySelector('.popup__close-button_action')
const nameInput = document.querySelector('.form__input_type_name')
const aboutInput = document.querySelector('.form__input_type_about')
const formEditor = document.querySelector('.form')
const formCreator = document.querySelector('[name="add__profile"]')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
const elements = document.querySelector('.elements')
const popupAction = document.querySelector('#popup-action')
const addBtn = document.querySelector('.profile__add-button')
const closeBtnAct = document.querySelector('.popup__close-button_action')
const form = document.querySelector('.form')
const titleInput = document.querySelector('.form__input_type_title')
const linkInput = document.querySelector('.form__input_type_link')
const editProfileButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupPictures = document.querySelector('#pictures-popup')
const picturesBtn = document.querySelector('.element__image')
const closeBtnpic = document.querySelector('.popup__close-button_pictures')
const contPic = document.querySelector('.popup__container_pictures')
const titlePic = document.querySelector('.popup__pictures-title')
const pictures = document.querySelector('.popup__pictures')

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

nameInput.defaultValue = profileName.textContent
aboutInput.defaultValue = profileAbout.textContent

editBtn.addEventListener('click', function () {
  openPopup(popupProfile)
})

closeBtn.addEventListener('click', function () {
  closePopup(popupProfile)
  aboutInput.value = profileAbout.textContent
  nameInput.value = profileName.textContent
})

formEditor.addEventListener('submit', function (e) {
  e.preventDefault();
  profileAbout.textContent = e.target.elements.about.value
  profileName.textContent = e.target.elements.name.value
  closePopup(popupProfile)
})


addBtn.addEventListener('click', function () {
  openPopup(popupAction)
})

closeBtnAct.addEventListener('click', function () {
  closePopup(popupAction)
})

function cardCreater(data) {
  const cardTemplate = document.querySelector('.element__template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');

  cardImage.src = data.link;
  cardImage.alt = `Фотография: ${data.name}`
  cardTitle.textContent = data.name;

  return cardElement;
}

formCreator.addEventListener('submit', function addCard(event) {
  event.preventDefault()
  const myCard = {
    name: event.target.elements.title.value,
    link: event.target.elements.link.value
  }

  closeBtnAct.addEventListener('click', function () {
    closePopup(popupAction)
    event.target.reset()
  })

  const card = cardCreater(myCard)
  elements.prepend(card)
  event.target.reset()
  closePopup(popupAction)

})

for (let i = 0; i < addingPictures.length; i += 1) {
  elements.append(cardCreater(addingPictures[i]))
}

elements.addEventListener('click', (event) => {
  const target = event.target;
  if (target && target.classList.contains('element__like-button')) {
    target.classList.toggle('element__like-button_active');
  }
})

elements.addEventListener('click', (event) => {
  const target = event.target;
  if (target && target.classList.contains('element__delete-button')) {
    const item = target.closest('.element')
    item.remove()
  }
})

elements.addEventListener('click', function (event) {
  const target = event.target

  if (target && target.classList.contains('element__image')) {
    openPopup(popupPictures)

    const parent = event.target.closest('.element')
    const title = parent.querySelector('.element__title')

    titlePic.textContent = title.textContent

    const picture = target.closest('.element__image')

    pictures.src = picture.src
    pictures.alt = `Фотография: ${title.textContent}`
  }
})

closeBtnpic.addEventListener('click', function () {
  closePopup(popupPictures)
})

