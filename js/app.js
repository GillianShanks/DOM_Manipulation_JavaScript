let counter=0;

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded");

  const form = document.querySelector('#art-form');
  form.addEventListener('submit', handleSubmit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteClick);

  const small_btn = document.querySelector('#small');
  small_btn.addEventListener('click', handleSizeClick);

  const large_btn = document.querySelector('#large');
  large_btn.addEventListener('click', handleSizeClick);

  const order = document.querySelector('#order');
  order.addEventListener('click', handleOrderClick);


})


const addElement = function (parentElement, type, idName, classNames=[], text, formID) {
  const childElement = document.createElement(`${type}`);
  childElement.id = `${idName}`;
  classNames.forEach((className) => {
    childElement.classList.add(`${className}`);
  })
  parentElement.appendChild(childElement);
  childElement.textContent = `${text}`;
  if (formID) {
    childElement.textContent += event.target[formID].value;
  }
  return childElement;
};


const handleSubmit = function(event){
  event.preventDefault();
  counter++;

  const art_list = document.querySelector('#art-list'); //can't place outside?

  const item = addElement(art_list, 'div', `${counter}`, ['list-item', 'flex', 'flex-column'], '');

  const img = addElement(item, 'img', 'item-img', ['item-line'], '');
  img.src = event.target.path.value;
  img.alt = event.target.desc.value; // to replace with new form element?
  // const selectedSize = selectedSize();
  img.classList.add('small');

  addElement(item, 'h2', 'item-desc', ['item-line'], 'Description: ', 'desc');
  addElement(item, 'h3', 'item-type', ['item-line'], 'Type: ', 'type');

  if (event.target.height.value && event.target.width.value) {
    const size = addElement(item, 'div', 'item-size', ['item-line', 'flex', 'flex-row'], '');
    addElement(size, 'p', 'item-height', ['item-line'], 'Size (cm): ', 'height');
    addElement(size, 'p', 'item-width', ['item-line'], "x", 'width');
  }


  //make nav list
  const nav_list = document.querySelector("#desc-list");

  const nav_item = addElement(nav_list, 'li', '', ['nav-item'], '');
  const nav_link = addElement(nav_item, 'a', '', [], `${event.target.desc.value}`);
  // nav_link.href=`index.html/#${counter}`

  event.target.reset();

}


const handleDeleteClick = function(){
  const art_list = document.querySelector('#art-list');
  art_list.innerHTML= "";
};


const handleSizeClick = function(event){
  // console.log(event.target.value);
  const imgs = document.querySelectorAll('#item-img');

  if (event.target.value === 'small'){
    imgs.forEach((img) => {
      if (img.classList.contains('large')){
        img.classList.remove('large');
      }
      if (!img.classList.contains('small')){
        img.classList.add('small');
      }
    });
  } else if (event.target.value === 'large'){
    imgs.forEach((img) => {
      if (img.classList.contains('small')){
        img.classList.remove('small');
      }
      if (!img.classList.contains('large')){
        img.classList.add('large');
      }
    });
  };
};

const handleOrderClick = function(event){
  // console.log(event.target.value);
  const order = document.querySelector('#order');
  const nav_title = document.querySelector('#nav-title');

  const nav = document.querySelector('#desc-list');
  const nav_list = nav.querySelectorAll('li');


  for (let i = nav_list.length - 1; i>=0; i--){
    nav.appendChild(nav_list[i]);
  }

  if (event.target.value === 'Oldest First'){
    order.value='Newest First';
    nav_title.textContent = "Nav List (Oldest First)"
  } else if (event.target.value === 'Newest First'){
    order.value='Oldest First';
    nav_title.textContent = "Nav List (Newest First)"
  };
};
