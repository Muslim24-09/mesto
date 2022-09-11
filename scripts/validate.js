// enableValidation({
//   formSelector: '.form',
//   inputSelector: '.form__input',
//   saveButtonSelector: '.form__save-button',
//   inactiveButtonClass: 'form__save-button_disabled',
//   inputErrorClass: 'form__input_type_error',
// });




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

  toggleSaveButtonStatus(inputArr, saveBtn, inactiveSaveButton)


  for (let i = 0; i < inputArr.length; i++) {
    inputArr[i].addEventListener('input', () => {
      toggleInputError(form, inputArr[i], inputErrorClass)
      toggleSaveButtonStatus(inputArr, saveBtn, inactiveSaveButton)
    })
  }
}


// функция изменения состояния кнопки
function toggleSaveButtonStatus(inputArr, saveButton, inactiveSaveButton) {
  if (checkInputValidity(inputArr)) {
    saveButton.disabled = false;
    saveButton.classList.remove(inactiveSaveButton)
  } else {
    saveButton.disabled = true;
    saveButton.classList.add(inactiveSaveButton)
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

  if (inputElement.validity.valid) {
    hideError(inputElement, inputErrorClass, errorElement)
  } else {
      showError(inputElement, inputErrorClass, errorElement)
  }
}

function showError(input, errorClass, errorElement) {
      input.classList.add(errorClass)
      errorElement.textContent=input.validationMessage
}


function hideError (input, errorClass, errorElement) {
  input.classList.remove(errorClass)
  errorElement.textContent=''
}
