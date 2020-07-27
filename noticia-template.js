const host ='https://terminalvillagarzon.herokuapp.com';

let index = location.search.substring(1);


function updateContent(source){
 for (entry in source){
 	if (source[entry].id == index){
 		tittle = document.getElementById('news-tittle');
 		text = document.getElementById('news-text');
 		image = document.getElementById('news-image');
 		tittle.innerHTML = source[entry].Titulo;
 		text.innerHTML = source[entry].DescripcionLarga;
 		image.src = source[entry].FotoPrincipal[0].url;
 	}
 }
}


fetch(host.concat('/Noticias'))
  .then(response => response.json())
  .then(links => updateContent(links))


