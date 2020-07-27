const host ='https://terminalvillagarzon.herokuapp.com';


function displayMainImages(fetchedImages){
let first_image = document.getElementById('firstImage');
first_image.src =  fetchedImages[0];
let second_image = document.getElementById('secondImage');
second_image.src = fetchedImages[1];
let third_image = document.getElementById('thirdImage');
third_image.src =  fetchedImages[2];
}



function getImages(source){
	let fetchedImages = [];
	for (i = (source.length- 1); i > (source.length-4); i--) {
		fetchedImages.push(source[i].Foto[0].url);
	}

return fetchedImages;

}

function createTourismCard(imageURL, nameText, descriptionText, locationText, contactText){
let main_div = document.getElementById('turismo-main-div');
 let firstDiv = document.createElement("div");
 main_div.appendChild(firstDiv);
 firstDiv.classList.add('border', 'rounded', 'nav-margins', 'full-width');
 let secondDiv = document.createElement("div");
 secondDiv.classList.add('card-body','change-column');
 firstDiv.appendChild(secondDiv);

 let thirdDiv_2 = document.createElement('div');
 secondDiv.appendChild(thirdDiv_2);

 let thirdDiv_1 = document.createElement('div');
 secondDiv.appendChild(thirdDiv_1);


 let image = document.createElement('img');
 image.src = imageURL;
 image.classList.add('new-image-size');
 thirdDiv_2.appendChild(image);


let name =  document.createElement('h5');
let setTittleText = document.createTextNode(nameText);
name.classList.add("card-title", 'footer-bold');
name.appendChild(setTittleText);


let description = document.createElement('p');
let setDescriptionText = document.createTextNode(descriptionText);
description.appendChild(setDescriptionText);

let location = document.createElement('p');
let setLocationText = document.createTextNode("Ubicacion:" + locationText);
location.appendChild(setLocationText);

let contact = document.createElement('p');
let setContactText = document.createTextNode("Contacto:" + contactText);
contact.appendChild(setContactText);

thirdDiv_1.appendChild(name);
thirdDiv_1.appendChild(description);
thirdDiv_1.appendChild(location);
thirdDiv_1.appendChild(contact);


}


function getAllEntries(source){
	let fetchedElements = [];
	for (i = source.length - 1; i >-1 ; i--) {
		elements = [];
		elements.push(source[i].Foto[0].url);
		elements.push(source[i].Nombre);
		elements.push(source[i].Descripcion);
		elements.push(source[i].Ubicacion);
		elements.push(source[i].Contacto);
		fetchedElements.push(elements);
	}

return fetchedElements;
}

function displayEntries(fetchedElements){

for (i = 0; i < fetchedElements.length; i++) {
	createTourismCard(fetchedElements[i][0],fetchedElements[i][1],fetchedElements[i][2], fetchedElements[i][3], fetchedElements[i][4]);
	}
}
			
						
fetch(host.concat('/imagenes-pagina-turismos'))
  .then(response => response.json())
  .then(source => getImages(source))
  .then(content => displayMainImages(content))
  

fetch(host.concat('/opciones-turismos'))
  .then(response => response.json())
  .then(source => getAllEntries(source))
  .then(content => displayEntries(content))


