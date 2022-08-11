const popup = document.querySelector('.popup')///попап
const editBtn = document.querySelector('.profile__edit-button')///иконка редактора
const closeBtn = document.querySelector('.popup__close-button')///крестик 
const formSaveButton = document.querySelector('.form__save-button');///сохранить


const nameInput = document.querySelector('.form__input_type_name')///доступ к значению
const aboutInput = document.querySelector('.form__input_type_about')///доступ к значению

const formEditor = document.querySelector('.form')///редактирование форм

const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')

nameInput.defaultValue = profileName.textContent
aboutInput.defaultValue = profileAbout.textContent

editBtn.addEventListener('click', function () {
	popup.classList.add('popup_opened')
	document.body.style.overflow = 'hidden';
})

closeBtn.addEventListener('click', function () {
	popup.classList.remove('popup_opened')
	document.body.style.overflow = 'auto';
	aboutInput.value = profileAbout.textContent
	nameInput.value = profileName.textContent
})

formEditor.addEventListener('submit', function (e) {
	e.preventDefault();
	profileAbout.textContent = e.target.elements.about.value
	profileName.textContent = e.target.elements.name.value
	popup.classList.remove('popup_opened');
})

