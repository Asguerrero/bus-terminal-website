const host ='https://terminalvillagarzon.herokuapp.com';

function createNewsCard(tittleText, descriptionText, imageURL, index){
let main_div = document.getElementById('news-main-div');
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


let tittle =  document.createElement('h5');
tittle.classList.add("card-title", 'footer-bold');
let setTittleText = document.createTextNode(tittleText);
tittle.appendChild(setTittleText);

let text = document.createElement('p');
let setDescriptionText = document.createTextNode(descriptionText);
text.appendChild(setDescriptionText);

let button = document.createElement('a');
button.href = 'noticia-template.html?' + index;
button.classList.add('btn', 'soft-yellow', 'zoom', 'noticias-btn-margin')
let buttonText = document.createTextNode("Leer mas");
button.appendChild(buttonText)
thirdDiv_1.appendChild(tittle);
thirdDiv_1.appendChild(text);
thirdDiv_1.appendChild(button);

}


function getAllNews(source){
	let fetchedElements = [];
	for (i = source.length - 1; i >-1 ; i--) {
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

function displayNews(fetchedElements){

for (i = 0; i < fetchedElements.length; i++) {
	createNewsCard(fetchedElements[i][1],fetchedElements[i][2],fetchedElements[i][0], fetchedElements[i][3]);
	}
}
						
fetch(host.concat('/Noticias'))
  .then(response => response.json())
  .then(source => getAllNews(source))
  .then(content => displayNews(content))