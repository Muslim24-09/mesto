import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PicturePopup } from '../components/PicturePopup.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import { addingPictures, formData, editorBtn, nameInput, aboutInput, addtBtn, formProfile, formCard } from '../utils/constants.js';

import './index.css';



const picturePopup = new PicturePopup('#pictures-popup')
picturePopup.setEventListeners()

const showPopupHandler = (name, link) => {
  picturePopup.open({ name, link })
}

const section = new Section(addingPictures, (item) => section.addItem(createCard(item)), '.elements')

const popupSubmitCard = new PopupWithForm('#popup-action', (item) => {
  section.addItem(createCard(item))
})

popupSubmitCard.setEventListeners()

const userInfo = new UserInfo({ userName: '.profile__name', about: '.profile__about' })

const popupProfile = new PopupWithForm('#popup-profile', (inputValues) => {
  userInfo.setUserInfo(inputValues);
  popupProfile.close()
})
popupProfile.setEventListeners()

const profileValidator = new FormValidator(formData, formProfile)
profileValidator.enableValidation()

const cardValidator = new FormValidator(formData, formCard)
cardValidator.enableValidation()

section.renderItems()


 function setUserInfoValues({userName, about}){
  nameInput.value = userName;
   aboutInput.value = about;
}
//фукция открытия попапа профиля по клику
editorBtn.addEventListener('click', function () {
  popupProfile.open()
  setUserInfoValues(userInfo.getUserInfo())
  profileValidator.resetValidation();
})

addtBtn.addEventListener('click', function () {
  popupSubmitCard.open()
  formCard.reset();
  cardValidator.resetValidation();
})

function createCard(data) {
  const card = new Card(data, '.element__template', showPopupHandler)
  return card.generateCard();
}
