const host ='http://localhost:1337';


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

return fetchedElements;
}


function updateContent(fetchedElements){
	arrayElements = getHTMLElements();

	for (i = 0 ; i < arrayElements.length; i++) {
		imageToUpdate = arrayElements[i][0];
  		imageToUpdate.src = host.concat(fetchedElements[i][0]);
  		titleToUpdate = arrayElements[i][1];
  		titleToUpdate.innerHTML = fetchedElements [i][1];
  		textToUpdate = arrayElements[i][2];
  		textToUpdate.innerHTML = fetchedElements[i][2];
  		linkToUpdate = arrayElements[i][3];
  		linkToUpdate.href = 'noticia-template.html?' + fetchedElements[i][3];

	}
	
}

fetch(host.concat('/Noticias'))
  .then(response => response.json())
  .then(source => getContent(source))
  .then(links => updateContent(links))




document.getElementById("video").src = 'https://www.youtube.com/embed/kEwEYTekN5U';