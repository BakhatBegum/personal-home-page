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