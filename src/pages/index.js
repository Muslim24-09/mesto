import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PicturePopup } from '../components/PicturePopup.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/API.js';
import { PopupConfirm } from '../components/PopupConfirm.js';

import { formData, editorBtn, nameInput, aboutInput, addtBtn, formProfile, formCard, authorisationData, formChangeAvatar, profileAvatarBtn } from '../utils/constants.js';
import { handleCardClick, handleCardLike, handleOpenPopupConfirm } from '../utils/utils.js'
import './index.css';

let section;

export const api = new Api(authorisationData)

export const picturePopup = new PicturePopup('#pictures-popup')
picturePopup.setEventListeners()

const userInfo = new UserInfo({ username: '.profile__name', about: '.profile__about', avatar: '.profile__avatar' })


// попап удаления карточки
export const popupConfirm = new PopupConfirm('#popup-delItem', (item) => {
  popupConfirm.renderLoader(true)
  api.removeItem(item.cardId)
    .then(() => {
      item.removeHandler()
      popupConfirm.close()
    })
    .catch((err) => console.error(err))
    .finally(() => popupConfirm.renderLoader(false))
})

popupConfirm.setEventListeners()

// попап добавления карточки
const popupAddItem = new PopupWithForm('#popup-action', (item) => {
  popupAddItem.renderLoader(true)
  api.addItem(item)
    .then((item) => {
      section.addItem(item)
      popupAddItem.close()
    })
    .catch((err) => console.error(err))
    .finally(() => popupAddItem.renderLoader(false))
})

popupAddItem.setEventListeners()

// попап редактирования профиля
const popupProfile = new PopupWithForm('#popup-profile', (data) => {
  popupProfile.renderLoader(true)
  api.updateUserInfo({ username: data.username, about: data.about })
    .then((newData) => {
      userInfo.updateUserInfo(newData)
      popupProfile.close()
    })
    .catch((err) => console.error(err))
    .finally(() => popupProfile.renderLoader(false))
})

popupProfile.setEventListeners()

// попап редактирования аватара
const popupAvatar = new PopupWithForm('.popup__change-avatar', (avatar) => {
  popupAvatar.renderLoader(true)
  api.updateUserAvatar(avatar)
    .then((newData) => {
      userInfo.updateUserAvatar(newData)
      popupAvatar.close()
    })
    .catch(() => alert('Пожалуйста, укажите ссылку на картинку'))
    .finally(() => popupAvatar.renderLoader(false))
})

popupAvatar.setEventListeners()


// валидация всех форм
const profileValidator = new FormValidator(formData, formProfile)
profileValidator.enableValidation()

const cardValidator = new FormValidator(formData, formCard)
cardValidator.enableValidation()

const avatarValidator = new FormValidator(formData, formChangeAvatar)
avatarValidator.enableValidation()


editorBtn.addEventListener('click', () => {
  popupProfile.open()

  const profileData = userInfo.getUserInfo()
  nameInput.value = profileData.username
  aboutInput.value = profileData.about

  profileValidator.resetValidation()
})

addtBtn.addEventListener('click', () => {
  popupAddItem.open()
  cardValidator.resetValidation()
})

profileAvatarBtn.addEventListener('click', () => {
  popupAvatar.open()
  avatarValidator.resetValidation()
})

Promise.all([api.getUserInfo(), api.getAddingPictures()])
  .then(rez => {
    const [infoUser, startCards] = rez
    userInfo.setUserInfo({ username: infoUser.name, about: infoUser.about, avatar: infoUser.avatar, _id: infoUser._id })
    section = new Section(startCards, (item) => {
      const newItem = new Card(item, userInfo.getUserId(), '.element__template', handleCardClick, handleOpenPopupConfirm, handleCardLike)
      return newItem.generateCard()
    }, '.elements__wrapper')

    section.renderItems()

  })
  .catch((err) => console.error(`Ошибка: ${err}`))




