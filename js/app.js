document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded");

  const form = document.querySelector('#art-form');
  form.addEventListener('submit', handleSubmit);


})

//uses two separate helper functions so that it does not at the item-line when there is no input from form (so there are two types of element that can be added: one without an event.target and one with an event.target)
const addElement = (parentElement, type, idName, classNames=[], text, itemID) => {
  const childElement = document.createElement(`${type}`);
  childElement.id = `${idName}`;
  classNames.forEach((className) => {
    childElement.classList.add(`${className}`);
  })
  parentElement.appendChild(childElement);
  if (itemID) {
    childElement.textContent = `${text}` + event.target[itemID].value;
  } else {
    childElement.textContent = `${text}`;
  }
  return childElement;
};

// const addElementItem = (parentElement, type, idName, classNames=[], text, itemID) => {
//   if (event.target[itemID].value) {
//     const childElement = addElement(parentElement, type, idName, classNames, text);
//     childElement.textContent = `${text}` + event.target[itemID].value;
//   };
// };


const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(event.target.height.value);

  const art_list = document.querySelector('#art-list');

  const item = addElement(art_list, 'div', 'list-item', ['flex', 'flex-column'], '');
  addElement(item, 'h2', 'item-desc', ['item-line'], 'Description: ', 'desc');
  addElement(item, 'h3', 'item-type', ['item-line'], 'Type: ', 'type');

  const size = addElement(item, 'div', 'item-size', ['item-line', 'flex', 'flex-row'], '');
  if (event.target.height.value && event.target.width.value) {
    addElement(size, 'p', 'item-height', ['item-line'], 'Size (cm): ', 'height');
    addElement(size, 'p', 'item-width', ['item-line'], "x", 'width');
  }

  addElement(item, 'p', 'item-path', ['item-line'], 'Path: ', 'path');


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
