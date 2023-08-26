document.getElementById('block').addEventListener('click', (event) => {
  let element_url = document.getElementById('url');
  element_url.innerText = 'https://github.com/BakhatBegum';
  element_url.setAttribute("href", 'https://github.com/BakhatBegum');

});

click_count = 0;


document.getElementById('count').addEventListener('click', (event) => {
  click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  event.target.innerText = click_count;

});

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

document.getElementById('button').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('text').value));

});