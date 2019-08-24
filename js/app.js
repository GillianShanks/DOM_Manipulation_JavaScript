document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded");

  const form = document.querySelector('#art-form');
  form.addEventListener('submit', handleSubmit);


})

const addNewElement = (parentElement, type, idName) => {
  const childElement = document.createElement(`${type}`);
  childElement.id = `${idName}`;
  parentElement.appendChild(childElement);
  return childElement;
};

const addElementItem = (appendTo, type, idName, className, itemID, text) => {
  if (event.target[itemID].value) {
    const childElement = document.createElement(`${type}`);
    childElement.classList.add(`${className}`);
    childElement.id = `${idName}`;
    childElement.textContent = `${text}` + event.target[itemID].value;
    appendTo.appendChild(childElement);
    return childElement;
  }
};


const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(event.target.height.value);

  const art_list = document.querySelector('#art-list');

  const item = addNewElement(art_list, 'div', 'list-item');
  addElementItem(item, 'h2', 'item-line', 'item-desc', 'desc', 'Description: ');
  addElementItem(item, 'h3', 'item-line', 'item-type', 'type', 'Type: ');

  const size = addNewElement(item, 'div', 'item-size');
  const height = addElementItem(size, 'p', 'item-line', 'item-height', 'height', 'Size (cm): ');
  const width = addElementItem(size, 'p', 'item-line', 'item-width', 'width', " x ");

  addElementItem(item, 'p', 'item-line', 'item-path', 'path', 'Path: ');


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

  // if (height_val && width_val){
  // const size = document.createElement('p');
  // size.textContent = `Size (hxw): ${event.target.height.value}cm x ${event.target.width.value}cm`;
  // item.appendChild(size);
  // }

  // const path = document.createElement('p');
  // path.textContent = `Path: ${path_val}`;
  // item.appendChild(path);


}
