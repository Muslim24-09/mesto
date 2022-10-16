import Card from "../components/Card.js"; // класс карточек
import { popupWithImage } from "../pages/index.js"; // импорт класса для использования публичного метода открытия попапа

const handleCardClick = item => {
    popupWithImage.open(item);
}; // функция для открытия попапа картинки (передается в конструктор)

export const createCard = item => {
    const card = new Card(item.link, item.name, '.element__template', showPopupHandler());

    return card.generateCard();
}; //функция создания карточки
