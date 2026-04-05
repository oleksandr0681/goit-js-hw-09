'use strict';

const feedbackForm = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};
const formStateKey = 'feedback-form-state';

feedbackForm.addEventListener('input', handleInput);
feedbackForm.addEventListener('submit', handleSubmit);

window.addEventListener('load', fillForm);

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  window.localStorage.setItem(formStateKey, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    window.localStorage.removeItem(formStateKey);
    formData.email = '';
    formData.message = '';
    feedbackForm.reset();
  }
}

function fillForm() {
  if (window.localStorage.getItem(formStateKey) !== null) {
    const parsedFormState = JSON.parse(
      window.localStorage.getItem(formStateKey)
    );
    const keys = Object.keys(parsedFormState);
    for (const key of keys) {
      feedbackForm.elements[key].value = parsedFormState[key];
      formData[key] = parsedFormState[key];
    }
  }
}
