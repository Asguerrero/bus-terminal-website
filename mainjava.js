console.log("Hello");

function updatedText(newtitle){
var title = document.getElementById("first-title");
title.innerHTML = newtitle;

}


fetch('http://localhost:1337/Noticias')
  .then(response => response.json())
  .then(Image => updatedImage('http://localhost:1337'.concat(Image[0].FotoPrincipal[0].url)
  	))


 function updatedImage(source){
 	document.getElementById("first-image").src = source;
 }

