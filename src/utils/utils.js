import { picturePopup, api, popupConfirm } from "../pages/index.js"; // импорт класса для использования публичного метода открытия попапа

export const handleCardClick = (item) => {
  picturePopup.open(item);
};

export const handleOpenPopupConfirm = (item) => {
  popupConfirm.open(item)
}

export const handleCardLike = (item) => {
  if (item.myLike) {
    api.dislikeItem(item.cardId)
      .then((rez) => {
        item.dislikeHandler(rez.likes.length)
      })
      .catch(err => console.error(err))
  } else {
    api.likeItem(item.cardId)
      .then((rez) => {
        item.likeHandler(rez.likes.length)
      })
      .catch(err => console.error(err))
  }
}

