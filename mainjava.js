const host ='https://terminalvillagarzon.herokuapp.com';


function getHTMLElements(){
	let arrayElements =[];
	let mainDivs = document.getElementsByClassName("news-card");
	for (div of mainDivs) { 
		let divChildren = div.childNodes;
		individual_elements = [];
		individual_elements.push(divChildren[1]);
		individual_elements.push(divChildren[3].childNodes[1]);
		individual_elements.push(divChildren[3].childNodes[3]);
		individual_elements.push(divChildren[3].childNodes[5]);
		arrayElements.push(individual_elements);
} 

return arrayElements;
//Array that contains sub-arries with the img and div elemtnts of news
}

function getContent(source){
	let fetchedElements = [];
	for (i = (source.length- 1); i > (source.length-4); i--) {
		elements = [];
		elements.push(source[i].FotoPrincipal[0].url);
		elements.push(source[i].Titulo);
		elements.push(source[i].Descripcion);
		elements.push(source[i].id);
		fetchedElements.push(elements);
	}
console.log(fetchedElements);
return fetchedElements;
}


function updateContent(fetchedElements){
	arrayElements = getHTMLElements();

	for (i = 0 ; i < arrayElements.length; i++) {
		imageToUpdate = arrayElements[i][0];
  		imageToUpdate.src = fetchedElements[i][0];
  		titleToUpdate = arrayElements[i][1];
  		titleToUpdate.innerHTML = fetchedElements [i][1];
  		textToUpdate = arrayElements[i][2];
  		textToUpdate.innerHTML = fetchedElements[i][2];
  		linkToUpdate = arrayElements[i][3];
  		linkToUpdate.href = 'noticia-template.html?' + fetchedElements[i][3];

	}
	
}

function displayMainImages(fetchedImages){
let first_image = document.getElementById('firstMainImage');
first_image.src =  fetchedImages[0];
let second_image = document.getElementById('secondMainImage');
second_image.src =  fetchedImages[1];
let third_image = document.getElementById('thirdMainImage');
third_image.src =  fetchedImages[2];
}



function getImages(source){
	let fetchedImages = [];
	for (i = (source.length- 1); i > (source.length-4); i--) {
		fetchedImages.push(source[i].Foto[0].url);
	}
return fetchedImages;
}


						
fetch(host.concat('/imagenes-pagina-principal'))
  .then(response => response.json())
  .then(source => getImages(source))
  .then(content => displayMainImages(content))


fetch(host.concat('/Noticias'))
  .then(response => response.json())
  .then(source => getContent(source))
  .then(links => updateContent(links))




document.getElementById("video").src = 'https://www.youtube.com/embed/kEwEYTekN5U';