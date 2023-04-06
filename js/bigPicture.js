import { checkForm } from './form.js';
const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImgUploadButton = document.querySelector('.img-upload__cancel');
const scale = document.querySelector('.scale__control--value');
const scaleDecreaseButton = document.querySelector('.scale__control--smaller');
const scaleIncreaseButton = document.querySelector('.scale__control--bigger');
const previewPicture = document.querySelector('.img-upload__preview img');


function closeImgUpload() {
  imgUpload.classList.add('hidden');
  document.removeEventListener('keydown', escapeKeyHandler);
}

function escapeKeyHandler(ev) {
  if (ev.key === 'Escape') {
    closeImgUpload();
  }
}

function openImgUpload() {
  imgUpload.classList.remove('hidden');
  document.addEventListener('keydown', escapeKeyHandler);
}

fileInput.addEventListener('change', openImgUpload);
closeImgUploadButton.addEventListener('click', closeImgUpload);
checkForm();
function setScale(scl) {
  scale.value=`${String(scl)}%`;
  previewPicture.style.transform=`scale(${scl/100})`;
}

function decreaseScale() {
  switch(scale.value) {
    case '100%':
      setScale(75);
      break;
    case '75%':
      setScale(50);
      break;
    case '50%':
      setScale(25);
      break;
  }
}
function increaseScale() {
  switch(scale.value) {
    case '25%':
      setScale(50);
      break;
    case '50%':
      setScale(75);
      break;
    case '75%':
      setScale(100);
      break;
  }
}
scaleDecreaseButton.addEventListener('click', decreaseScale);
scaleIncreaseButton.addEventListener('click', increaseScale);

const slider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
noUiSlider.create(slider, {
  start:[1],
  range: {
    'min': 0,
    'max': 1
  },
  step:0.1
});
function updateSlider(min, max, step) {
  slider.noUiSlider.destroy();
  noUiSlider.create(slider, {
    start:[max],
    range: {
      'min': min,
      'max': max
    },
    step:step
  });
}


const effectButtons = document.querySelectorAll('.effects__radio');
let currentEffect='none';
function addEffectHandler(button) {
  button.addEventListener('change', ()=> {
    previewPicture.classList.remove(`effects__preview--${currentEffect}`);
    previewPicture.classList.add(`effects__preview--${button.value}`);
    currentEffect=button.value;
    switch (currentEffect) {
      case 'chrome':
        updateSlider(0,1,0.1);
        break;
      case 'sepia':
        updateSlider(0,1,0.1);
        break;
      case 'marvin':
        updateSlider(0, 100, 1);
        break;
      case 'phobos':
        updateSlider(0,3, 0.1);
        break;
      case 'heat':
        updateSlider(1,3,0.1);
        break;
      case 'none':
        previewPicture.style.filter='';
        break;
    }
  });
}

for (let i = 0; i<effectButtons.length; i++) {
  addEffectHandler(effectButtons[i]);
}

slider.noUiSlider.on('change', ()=> {
  effectValue.value=slider.noUiSlider.get(true);
  switch(currentEffect) {
    case 'chrome':
      previewPicture.style.filter='grayscale(0..1)';
      break;
    case 'sepia':
      previewPicture.style.filter='sepia(0..1)';
      break;
    case 'marvin':
      previewPicture.style.filter='invert(0..100%)';
      break;
    case 'phobos':
      previewPicture.style.filter='blur(0..3px)';
      break;
    case 'heat':
      previewPicture.style.filter='brightness(1..3)';
      break;
  }

});

