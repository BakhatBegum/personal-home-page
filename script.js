document.getElementById('block').addEventListener('click', (event) => {
  let element_url = document.getElementById('url');
  element_url.innerText = 'https://github.com/BakhatBegum';
  element_url.setAttribute("href", 'https://github.com/BakhatBegum');

});

var list_name, item;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


list_name = ['Ali', 'Sonia', 'Wali'];
let element_list = document.getElementById('list');
list_name.forEach((item) => {
  let new_li = document.createElement('li');
  new_li.innerText = item;

  element_list.appendChild(new_li);
});


document.getElementById('add_name').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = document.getElementById('text').value;
  list_name.push(document.getElementById('text').value);

  element_list2.appendChild(new_li2);

});

document.getElementById('name').addEventListener('click', (event) => {
  let element_result_name = document.getElementById('result_name');
  element_result_name.innerText = randomMember(list_name);

});