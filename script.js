const form = document.querySelector('form');
const input = document.querySelector('.input');
const errorIcon = document.querySelector('.error-icon');
const errorText = document.querySelector('.error-text');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputValue = e.target.children[0].value;

  if (!emailRegex.test(inputValue)) {
    errorIcon.style.visibility = 'visible';
    errorText.style.visibility = 'visible';
    input.style.border = '2px solid #f96464';
  } else {
    e.target.children[0].value = '';
    errorIcon.style.visibility = 'hidden';
    errorText.style.visibility = 'hidden';
    input.style.border = '1px solid #ce9898';
  }
});
