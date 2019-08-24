//for handleSubmit

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


  //old addElementItem option reason:
  //use two separate helper functions so that it does not at the item-line when there is no input from form (so there are two types of element that can be added: one without an event.target and one with an event.target)
  // refactored to use one helper function and put the if statement in the addEventListener>callbackfunction

  // const addElementItem = (parentElement, type, idName, classNames=[], text, formID) => {
  //   if (event.target[itemID].value) {
  //     const childElement = addElement(parentElement, type, idName, classNames, text);
  //     childElement.textContent = `${text}` + event.target[formID].value;
  //   };
  // };
  // const selectedSize = () => {
  //
  // }
