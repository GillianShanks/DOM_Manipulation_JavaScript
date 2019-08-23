document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded");

  const form = document.querySelector('#art-form');
  form.addEventListener('submit', handleSubmit);


})

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.height.value);

  const desc_val = event.target.desc.value;
  const type_val = event.target.type.value;
  const height_val = event.target.height.value;
  const width_val = event.target.width.value;
  const path_val = event.target.path.value;


  const list = document.querySelector('#art-list');
  const item = document.createElement('div');
  item.classList.add('list_item');
  list.appendChild(item);

  const desc = document.createElement('h2');
  desc.textContent = `Description: ${desc_val}`;
  item.appendChild(desc);

  const type = document.createElement('h3');
  type.textContent = `Type: ${type_val}`;
  item.appendChild(type);

  if (height_val && width_val){
  const size = document.createElement('p');
  size.textContent = `Size (hxw): ${height_val}cm x ${width_val}cm`;
  item.appendChild(size);
  }

  const path = document.createElement('p');
  path.textContent = `Path: ${path_val}`;
  item.appendChild(path);



}
