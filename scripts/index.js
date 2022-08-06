const popup = document.querySelector('.popup')
const editBtn = document.querySelector('.profile__editor')
const closeBtn = document.querySelector('.popup__close-button')
const likeBtn = document.querySelectorAll('.element__like')

const nameInput = document.querySelector('.form__input_type_name')
const aboutInput = document.querySelector('.form__input_type_about')

const formEditor = document.querySelectorAll('.form')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')

nameInput.defaultValue = profileName.textContent
aboutInput.defaultValue = profileAbout.textContent

editBtn.addEventListener('click', function () {
	popup.classList.add('popup_opened')
})

closeBtn.addEventListener('click', function () {
	popup.classList.remove('popup_opened')
})

for (let i = 0; i < likeBtn.length; i += 1) {
	likeBtn[i].addEventListener('click', function () {
		if (likeBtn[i].classList.contains('element__like_active') === true) {
			likeBtn[i].classList.remove('element__like_active')
		} else {
			likeBtn[i].classList.add('element__like_active')
		}
	})
}

submitBtn.addEventListener('click', function() {
	if(nameInput.value.length > 0 && aboutInput.value.length > 0) {
		profileName.textContent = nameInput.value
		profileAbout.textContent = aboutInput.value
		popup.classList.remove('popup_opened')
	} else {
		alert('ПОЖАЛУЙСТА, ЗАПОЛНИТЕ ОБА ПОЛЯ')
	}
	
})
  



