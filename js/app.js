document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded");

  const form = document.querySelector('#art-form');
  form.addEventListener('submit', handleSubmit);


})

const addNewElement = (appendToID, type, idName, itemID, text) => {
  const parentElement = document.querySelector(`#${appendToID}`);
  var childElement = document.createElement(`${type}`);
  childElement.id = `${idName}`;
  parentElement.appendChild(childElement);
  return childElement;
};

const addElementItem = (appendTo, type, idName, itemID, text) => {
  const childElement = document.createElement(`${type}`);
  if (itemID){
    childElement.textContent = `${text}` + event.target[itemID].value;
  }
  childElement.id = `${idName}`;
  appendTo.appendChild(childElement);
};


const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(event.target.height.value);

  const height_val =event.target.height.value;
  const width_val =event.target.width.value;

  const item = addNewElement('art-list', 'div', 'list-item');
  addElementItem(item, 'h2', 'item-line', 'desc', 'Description: ');
  addElementItem(item, 'h3', 'item-line', 'type', 'Type: ');


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

  if (height_val && width_val){
  const size = document.createElement('p');
  size.textContent = `Size (hxw): ${event.target.height.value}cm x ${event.target.width.value}cm`;
  item.appendChild(size);
  }

  addElementItem(item, 'p', 'item-line', 'path', 'Path: ');
  // const path = document.createElement('p');
  // path.textContent = `Path: ${path_val}`;
  // item.appendChild(path);

  event.target.reset();

}
