// В файле index.js должно остаться только создание классов и добавление некоторых обработчиков.

// Если классы нужно связать друг с другом, делайте это передаваемой в конструктор функцией-колбэком.

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PicturePopup } from '../components/PicturePopup.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UzerInfo.js';

import { addingPictures, formData, editorBtn, nameInput, aboutInput, formCreator, profileName, profileAbout, addtBtn, titlePic, picturesPopup, formProfile, formCard } from '../utils/constants.js';

import './index.css';



const picturePopup = new PicturePopup('#pictures-popup')
picturePopup.setEventListeners()

const showPopupHandler = (name, link) => {

  picturePopup.open({ name, link })
  titlePic.textContent = name;
  picturesPopup.src = link;
  picturesPopup.alt = `Фотография: ${name}`;
}

const section = new Section(addingPictures, (item) => section.addItem(createCard(item)), '.elements')

const popupSubmitCard = new PopupWithForm('#popup-action', () => section.addItem())

popupSubmitCard.setEventListeners()

const userInfo = new UserInfo({ title: '.profile__name', description: '.profile__about' })

const popupProfile = new PopupWithForm('#popup-profile', () => userInfo.getUserInfo())
popupProfile.setEventListeners()

const profileValidator = new FormValidator(formData, formProfile)
profileValidator.enableValidation()

const cardValidator = new FormValidator(formData, formCard)
cardValidator.enableValidation()

section.renderItems()

//фукция открытия попапа профиля по клику
editorBtn.addEventListener('click', function (e) {
  e.preventDefault();
  popupProfile.open()
  nameInput.value = profileName.textContent
  aboutInput.value = profileAbout.textContent
  profileValidator.restartFormState();
})

formProfile.addEventListener('submit', function (e) {
  e.preventDefault();
  let newInfo = {}
  newInfo.title = nameInput.value
  newInfo.description = aboutInput.value
  userInfo.setUserInfo(newInfo)
  popupProfile.close()
})

addtBtn.addEventListener('click', function () {
  popupSubmitCard.open()

  formCard.reset();
  cardValidator.restartFormState();
})


function createCard(data) {
  const card = new Card(data, '.element__template', showPopupHandler)
  return card.generateCard();
}

formCreator.addEventListener('submit', (event) =>  {
  event.preventDefault()
  section.addItem(createCard(popupSubmitCard._getInputValues()))
  // event.target.reset()
  popupSubmitCard.close()
})

