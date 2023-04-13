function sendData(form, callBackfunc, openImgUpload) {
  const successTemplate = document.querySelector('#success').content;
  const errorTemplate = document.querySelector('#error').content;
  const errorMessage = errorTemplate.querySelector('.error');
  const successMessage = successTemplate.querySelector('.success');
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(form)
    }).then((response) => {
    if (response.ok) {
      const newMessage = successMessage.cloneNode(true);
      const successButton = newMessage.querySelector('.success__button');
      successButton.addEventListener('click', () => newMessage.remove());
      // eslint-disable-next-line no-inner-declarations
      function successEscapeKeyHandler() {
        newMessage.remove();
        document.removeEventListener('keydown', successEscapeKeyHandler);
      }
      document.addEventListener('keydown', successEscapeKeyHandler);
      document.body.appendChild(newMessage);
    } else {
      const newMessage = errorMessage.cloneNode(true);
      const errorButton = newMessage.querySelector('.error__button');
      errorButton.addEventListener('click', () => {
        newMessage.remove();
        openImgUpload();
      });
      // eslint-disable-next-line no-inner-declarations
      function errorEscapeKeyHandler() {
        newMessage.remove();
        document.removeEventListener('keydown', errorEscapeKeyHandler);
      }
      document.addEventListener('keydown', errorEscapeKeyHandler);
      document.body.appendChild(newMessage);
    }
    callBackfunc(response.ok);
  });
}
export {sendData};
