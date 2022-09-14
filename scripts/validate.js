
//Получаем массив всех форм
function enableValidation(formData) {
  const formArr = Array.from(document.querySelectorAll(formData.formSelector))

  for (let i = 0; i < formArr.length; i++) {
    formArr[i].addEventListener('submit', (e) => {
      e.preventDefault()
    })
    connectAllEventListeners(formArr[i], formData.inputSelector, formData.saveButtonSelector,
      formData.inactiveButtonClass, formData.inputErrorClass)
  }
}


function connectAllEventListeners(form, formInput, saveButton, inactiveSaveButton, inputErrorClass) {
  const inputArr = Array.from(form.querySelectorAll(formInput))
  const saveBtn = form.querySelector(saveButton)

  for (let i = 0; i < inputArr.length; i++) {
    inputArr[i].addEventListener('input', () => {
      toggleInputError(form, inputArr[i], inputErrorClass)
      toggleSaveButtonStatus(inputArr, saveBtn, inactiveSaveButton)
    })
  }
}


// функция изменения состояния кнопки
function toggleSaveButtonStatus(inputArr, saveButton, inactiveSaveButton) {
  if (!checkInputValidity(inputArr)) {
    saveButton.disabled = true;
    saveButton.classList.add(inactiveSaveButton)
  } else {
    saveButton.disabled = false;
    saveButton.classList.remove(inactiveSaveButton)
  }
}

function checkInputValidity(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    if (!inputArr[i].validity.valid) {
      return false;
    }
  }
  return true;
}

function toggleInputError(form, inputElement, inputErrorClass) {
  const errorElement = form.querySelector(`.form__input-${inputElement.name}-error`)

  if (!errorElement) {
    return;
  }
  if (inputElement.validity.valid) {
    hideError(inputElement, inputErrorClass, errorElement)
  } else {
    showError(inputElement, inputErrorClass, errorElement)
  }
}

function showError(input, errorClass, errorElement) {
  input.classList.add(errorClass)
  errorElement.textContent = input.validationMessage
}
function hideError(input, errorClass, errorElement) {
  input.classList.remove(errorClass)
  errorElement.textContent = ''
}

//функция очистки полей и ошибок если в попапе есть форма
function restartFormState(popup, formData) {
  const saveBtn = popup.querySelector(formData.saveButtonSelector)
  const form = popup.querySelector(formData.formSelector)

  if (popup.querySelector(formData.saveButtonSelector)) {
    const errorList = Array.from(form.querySelectorAll('.form__error'))
    const inputList = Array.from(form.querySelectorAll(formData.inputSelector))

    restartError(errorList, inputList, formData)
    restartForm(form)

    toggleInputError(form, saveBtn, formData.inactiveButtonClass)
  }
}

//функция сброса формы
function restartForm(form) {
  form.reset()
}

// функция сброса ошибок
function restartError(errorList, inputList, formData){
  for (let i = 0; i < errorList.length; i++){
    errorList[i].textContent = ""
  }
for (let i = 0; i < inputList.length; i++){
    inputList[i].classList.remove(formData.inputErrorClass)
  }
}
