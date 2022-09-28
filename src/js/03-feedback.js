// из видео с Репетой по простой форме
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const formData = {};

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     input: document.querySelector('input'),
// };

// refs.form.addEventListener("submit", onFormSubmit);
// refs.textarea.addEventListener("input", throttle(onTextAreaInput, 500));

// refs.form.addEventListener('input', e => {
//     formData[e.target.name] = e.target.value;
//     const stringifiedData = JSON.stringify(formData);
//     localStorage.setItem(STORAGE_KEY, stringifiedData);
// })

// populateTextArea();

// function onFormSubmit(event) {
//     event.preventDefault();
//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     console.log(formData);
// }



// function onTextAreaInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(STORAGE_KEY, message);

// }

// function populateTextArea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);

//     if (savedMessage) {
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     }
//     }

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};

const formData = {};

populateTextarea();

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.getItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData)
});

function onTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
    if (savedMessage === null) {
      return;
    }
    refs.textarea.value = savedMessage['message'] || '';
    refs.input.value = savedMessage['email'] || '';
  }




