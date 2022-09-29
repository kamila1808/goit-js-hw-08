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

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

const STORAGE_KEY = 'feedback-form-state';

populateTextArea();

refs.form.addEventListener(
  'input',
  throttle(event => {
    const formData = {
      email: `${refs.form['email'].value}`,
      message: `${refs.form['message'].value}`,
    };

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, formDataJSON);
  }, 500)
);

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: `${refs.form['email'].value}`,
    message: `${refs.form['message'].value}`,
  };

  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

function populateTextArea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedMessage);
  if (parsedData) {
    refs.email.value = parsedData.email;
    refs.message.value = parsedData.message;
  }
}
