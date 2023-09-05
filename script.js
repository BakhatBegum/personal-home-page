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

var Img_list, src;

// Describe this function...
function carousel() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (Img_list) {
    let element_image = document.getElementById('image');
    element_image.setAttribute("src", Img_list[0]);
  } else if (Img_list) {
    let element_image2 = document.getElementById('image');
    element_image2.setAttribute("src", Img_list.shift());
  } else {
    let element_image3 = document.getElementById('image');
    element_image3.setAttribute("src", Img_list.slice(-1)[0]);
  }
}

var Img_list, src;

// Describe this function...
function carousel() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (Img_list) {
    let element_image = document.getElementById('image');
    element_image.setAttribute("src", Img_list[0]);
  } else if (Img_list) {
    let element_image2 = document.getElementById('image');
    element_image2.setAttribute("src", Img_list.shift());
  } else {
    let element_image3 = document.getElementById('image');
    element_image3.setAttribute("src", Img_list.slice(-1)[0]);
  }
}

// Describe this function...
function img_list() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  add_carousel();
  carousel();
}

// Describe this function...
function add_carousel() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image5 = document.getElementById('image');
  Img_list.forEach((Img_list) => {
    let element_image6 = document.getElementById('image');
    element_image6.setAttribute("src", Img_list.slice(-1)[0]);
  });
}


let element_image4 = document.getElementById('image');
Img_list = ['https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80', 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'];
element_image4.setAttribute("src", Img_list);


document.getElementById('previous').addEventListener('click', (event) => {
  Img_list.unshift(Img_list.pop());
  img_list();

});

document.getElementById('next').addEventListener('click', (event) => {
  Img_list.push(Img_list.shift());
  img_list();

});
'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';



var add_item, dummyVar, navbar;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}



document.getElementById('dropdown-content').addEventListener('click', (event) => {
  if (dummyVar == 'false') {
    event.target.innerText = 'X';
    let element_navbar = document.getElementById('navbar');
    while (!!navbar.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      let new_li = document.createElement('li');
      new_li.innerText = navbar.shift();

      element_navbar.appendChild(new_li);
    }
    dummyVar = 'true';
  } else {
    let element_navbar2 = document.getElementById('navbar');
    element_navbar2.replaceChildren();
    dummyVar = 'false';
    event.target.innerText = '☰';
  }

});
dummyVar = 'false';
navbar = [' home', 'about', 'content'];


document.getElementById('add-three').addEventListener('click', (event) => {
  add_item = ['Hair Clip 🎀'];
  let element_list = document.getElementById('list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = add_item;

  element_list.appendChild(new_li2);

});

document.getElementById('add-two').addEventListener('click', (event) => {
  add_item = ['bag 👛'];
  let element_list2 = document.getElementById('list');
  let new_li3 = document.createElement('li');
  new_li3.innerText = add_item;

  element_list2.appendChild(new_li3);

});

document.getElementById('add-one').addEventListener('click', (event) => {
  add_item = ['Shoes 👠'];
  let element_list3 = document.getElementById('list');
  let new_li4 = document.createElement('li');
  new_li4.innerText = add_item;

  element_list3.appendChild(new_li4);

});

document.getElementById('add-shopping').addEventListener('click', (event) => {
  add_item = [' Dress👗'];
  let element_list4 = document.getElementById('list');
  let new_li5 = document.createElement('li');
  new_li5.innerText = add_item;

  element_list4.appendChild(new_li5);

});

document.getElementById('add-comment').addEventListener('click', (event) => {
  let element_add_list = document.getElementById('add-list');
  let new_li6 = document.createElement('li');
  new_li6.innerText = document.getElementById('add-text').value;

  element_add_list.appendChild(new_li6);

});