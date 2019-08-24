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


})



//use two separate helper functions so that it does not at the item-line when there is no input from form (so there are two types of element that can be added: one without an event.target and one with an event.target)
// refactored to use one helper function and put the if statement in the addEventListener>callbackfunction

const addElement = (parentElement, type, idName, classNames=[], text, formID) => {
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

// const addElementItem = (parentElement, type, idName, classNames=[], text, formID) => {
//   if (event.target[itemID].value) {
//     const childElement = addElement(parentElement, type, idName, classNames, text);
//     childElement.textContent = `${text}` + event.target[formID].value;
//   };
// };
const selectedSize = () => {
  
}

const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(event.target.height.value);

  const art_list = document.querySelector('#art-list'); //can't place outside?

  const item = addElement(art_list, 'div', 'list-item', ['flex', 'flex-column'], '');

  const img = addElement(item, 'img', 'item-img', ['item-line'], '');
  img.src = event.target.path.value;
  img.alt = event.target.desc.value; // to replace with new form element?
  const selectedSize = selectedSize();

  addElement(item, 'h2', 'item-desc', ['item-line'], 'Description: ', 'desc');
  addElement(item, 'h3', 'item-type', ['item-line'], 'Type: ', 'type');

  if (event.target.height.value && event.target.width.value) {
    const size = addElement(item, 'div', 'item-size', ['item-line', 'flex', 'flex-row'], '');
    addElement(size, 'p', 'item-height', ['item-line'], 'Size (cm): ', 'height');
    addElement(size, 'p', 'item-width', ['item-line'], "x", 'width');
  }


  event.target.reset();

  //UN-REFACTORED CODE (for reference)
  // const list = document.querySelector('#art-list');
  // const item = document.createElement('div');
  // item.id = 'list-item';
  // list.appendChild(item);

  // const item = document.querySelector(`#list-item`);

  // const desc = document.createElement('h2');
  // item.appendChild(desc);
  // desc.textContent = `Description: ${event.target.desc.value}`;


  // const type = document.createElement('h3');
  // type.textContent = `Type: ${type_val}`;
  // item.appendChild(type);


  // const height_val =event.target.height.value;
  // const width_val =event.target.width.value;

  //add div around height and width
  // if (height_val && width_val){
  // const size = document.createElement('p');
  // size.textContent = `Size (hxw): ${event.target.height.value}cm x ${event.target.width.value}cm`;
  // item.appendChild(size);
  // }

  // const path = document.createElement('p');
  // path.textContent = `Path: ${path_val}`;
  // item.appendChild(path);


}


const handleDeleteClick = () => {
  const art_list = document.querySelector('#art-list');
  art_list.innerHTML= "";
};



const handleSizeClick = (event) => {
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
