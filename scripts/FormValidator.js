export class FormValidator {
  _inputSelector;
  _saveButtonSelector;
  _inactiveButtonClass;
  _errorClass;
  _classForm;
  _inputList;
  _errorList;
  _saveButton;
  _formError;


  constructor(params, classForm) {
    // все классы
    this._inputSelector = params.inputSelector;
    this._saveButtonSelector = params.saveButtonSelector;
    this._inactiveButtonClass = params.inactiveButtonClass;

    this._errorClass = params.inputErrorClass;
    this._formError = params.formError

    // форма которой добавлем валидацию
    this._classForm = classForm;

    this._inputList = Array.from(this._classForm.querySelectorAll(this._inputSelector)); // поиск всех инпутов формы
    this._errorList = Array.from(this._classForm.querySelectorAll(this._formError));

    this._saveButton = this._classForm.querySelector(this._saveButtonSelector); // кнопка формы
  }

  _restartError() {
    for (let i = 0; i < this._errorList.length; i++) {
      this._errorList[i].textContent = ""
    }
    for (let i = 0; i < this._inputList.length; i++) {
      this._inputList[i].classList.remove(this._errorClass)
    }
  }


  _restartForm() {
    this._classForm.reset();
  }

  restartFormState() {
    if (this._saveButton) {
      this._restartError();
      this._restartForm();
    }
  }

  _showError(input, errorElement) {
    input.classList.add(this._errorClass)
    errorElement.textContent = input.validationMessage
  }

  _hideError(input, errorElement) {
    input.classList.remove(this._errorClass)
    errorElement.textContent = ''
  }

  _toggleInputError(inputElement) {
    const errorElement = this._classForm.querySelector(`.form__input-${inputElement.name}-error`)

    if (!errorElement) {
      return;
    }
    if (inputElement.validity.valid) {
      this._hideError(inputElement, errorElement)
    } else {
      this._showError(inputElement, errorElement)
    }
  }

  _checkInputValidity() {
    for (let i = 0; i < this._inputList.length; i++) {
      if (!this._inputList[i].validity.valid) {
        return false;
      }
    }
    return true;
  }

  _toggleSaveButtonStatus() {
    if (!this._checkInputValidity()) {
      this._saveButton.disabled = true;
      this._saveButton.classList.add(this._inactiveButtonClass)
    } else {
      this._saveButton.disabled = false;
      this._saveButton.classList.remove(this._inactiveButtonClass)
    }
  }

  _connectAllEventListeners() {
    for (let i = 0; i < this._inputList.length; i++) {
      this._inputList[i].addEventListener('input', () => {
        this._toggleInputError(this._inputList[i])
        this._toggleSaveButtonStatus()
      })
    }
  }

  enableValidation() {
    this._connectAllEventListeners();
  }
}




// const disableSubmitButton = (openedPopup) => {
// const cardSaveButton = openedPopup.querySelector(".form__save-button")
// cardSaveButton.setAttribute('disabled', true);
// cardSaveButton.classList.add("form__save-button_disabled")

// }
