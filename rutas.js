const host ='https://terminalvillagarzon.herokuapp.com';

let urlParameter = location.search.substring(1);


let input = document.getElementById("user-input");
let button_route = document.getElementById("search-by-route");
let button_company = document.getElementById("search-by-company");
let button_show_routes = document.getElementById("see-routes");
let button_show_companies = document.getElementById("see-companies");
let div_relleno = document.getElementById("div_relleno");

function checkInput(){
	console.log(input.value)
}

function hide_relleno(){
	div_relleno.classList.add('hide_div');

}

function checkSpecialCh(){
	let str = input.value;
	let resone = str.replace("á", "a");
	let restwo = resone.replace("é", "e");
	let resthree = restwo.replace("í", "i");
	let resfour = resthree.replace("ó", "o");
	let resfive = resfour.replace("ú", "u");

	return resfive;

}

button_company.addEventListener("click", fetch_by_company);
button_route.addEventListener("click", fetch_by_route)
button_show_companies.addEventListener("click", fetch_all_by_company);
button_show_routes.addEventListener("click", fetch_all_by_route);


function fetch_by_route(){
	fetch(host.concat('/rutas'))
	  .then(response => response.json())
	  .then(source => search_by_route(source))
	  .then(matched_routes => display_routes(matched_routes))
}

function fetch_by_company(){
	fetch(host.concat('/empresas-de-transportes'))
	  .then(response => response.json())
	  .then(source => search_by_company(source))
	  .then(matched_company => display_company(matched_company))
	  
}

function fetch_all_by_company(){
	fetch(host.concat('/empresas-de-transportes'))
	  .then(response => response.json())
	  .then(all => display_all_companies(all))

}

function fetch_all_by_route(){
	fetch(host.concat('/rutas'))
	  .then(response => response.json())
	  .then(all => display_routes(all))

}


function search_by_route(source){
	
	let matched_routes =[];
	for (entry in source){
		if (source[entry].Destino.toLowerCase() == checkSpecialCh().toLowerCase()){
				matched_routes.push(source[entry]);
			 	console.log(source[entry]);
		}
	}	  
	return matched_routes;
}


function search_by_company(source){
	let matched_company = null;
	for (entry in source){
		if (source[entry].Nombre.toLowerCase() == checkSpecialCh().toLowerCase()){
				matched_company = source[entry];
				return matched_company;
		}
	}	  
	
}


function display_company(matched_company){
	console.log("hey")
	let main_div = document.getElementById('cards-div');
	removeAllChildNodes(main_div);
	hide_relleno();

	for(ruta in matched_company.rutas){
		console.log(ruta)
		createRouteCard(
   				matched_company.Nombre, 
   				matched_company.rutas[ruta].Horario, 
   				matched_company.rutas[ruta].Precio, 
   				matched_company.rutas[ruta].Duracion, 
   				matched_company.Telefono, 
   				matched_company.Pagina,
   				matched_company.rutas[ruta].Destino
   				)
	}

	
}

function display_all_companies(companies){
	console.log("hey")
	let main_div = document.getElementById('cards-div');
	removeAllChildNodes(main_div);
	hide_relleno();

	for (i = 0; i < companies.length; i++){

		createAllCompaniesCard(companies[i].Nombre, 
   				companies[i].Telefono, 
   				companies[i].Pagina
   				)
				

	}


	
}

function display_routes(matched_routes){

	let main_div = document.getElementById('cards-div');
	removeAllChildNodes(main_div);
	hide_relleno();

	for (i = 0; i < matched_routes.length; i++) {
   			createRouteCard(matched_routes[i].empresas_de_transporte.Nombre, 
   				matched_routes[i].Horario, 
   				matched_routes[i].Precio, 
   				matched_routes[i].Duracion, 
   				matched_routes[i].empresas_de_transporte.Telefono, 
   				matched_routes[i].empresas_de_transporte.Pagina,
   				matched_routes[i].Destino
   				)
	}

}

function createRouteCard(companyText, scheduleText, priceText, durationText, phoneText, websiteText, destinationText){
let main_div = document.getElementById('cards-div');
 let firstDiv = document.createElement("div");
 main_div.appendChild(firstDiv);

firstDiv.classList.add('border-bottom-orange', 'nav-margins', 'flex-wrap');

let imageDiv = document.createElement("div");
firstDiv.appendChild(imageDiv);
imageDiv.classList.add('route_bus_margin');

let textDiv = document.createElement("div");
firstDiv.appendChild(textDiv);

let busIcon = document.createElement("img");
busIcon.src = "./Images/bus-icon.png";
busIcon.classList.add('bus-icon-size');
imageDiv.appendChild(busIcon);

let destination = document.createElement('p');
destination.classList.add('no-margins')
let setDestinationText = document.createTextNode("Destino: " + destinationText);
destination.appendChild(setDestinationText);

let company = document.createElement('p');
company.classList.add('no-margins')
let setCompanyText = document.createTextNode("Empresa: " + companyText);
company.appendChild(setCompanyText);

let schedule = document.createElement('p');
schedule.classList.add('no-margins')
let setScheduleText = document.createTextNode("Horario: " + scheduleText);
schedule.appendChild(setScheduleText);

let price = document.createElement('p');
price.classList.add('no-margins')
let setPriceText = document.createTextNode("Precio: " + priceText);
price.appendChild(setPriceText);

let duration = document.createElement('p');
duration.classList.add('no-margins')
let setDurationText = document.createTextNode("Duracion del viaje: " + durationText);
duration.appendChild(setDurationText);

let contact = document.createElement('p');
contact.classList.add('no-margins')
let setContactText = document.createTextNode("Contacto: " + phoneText);
contact.appendChild(setContactText);

let website = document.createElement('p');
website.classList.add('no-margins')
let setWebsiteText = document.createTextNode("Pagina oficial: " + websiteText);
website.appendChild(setWebsiteText);

textDiv.appendChild(destination)
textDiv.appendChild(company);
textDiv.appendChild(schedule);
textDiv.appendChild(price);
textDiv.appendChild(duration);
textDiv.appendChild(contact);
textDiv.appendChild(website);

}

function createAllCompaniesCard(companyText, phoneText, websiteText){
let main_div = document.getElementById('cards-div');
 let firstDiv = document.createElement("div");
 main_div.appendChild(firstDiv);

firstDiv.classList.add('border-bottom-orange', 'nav-margins', 'flex-wrap');

let imageDiv = document.createElement("div");
firstDiv.appendChild(imageDiv);
imageDiv.classList.add('route_bus_margin');

let textDiv = document.createElement("div");
firstDiv.appendChild(textDiv);

let busIcon = document.createElement("img");
busIcon.src = "./Images/bus-icon.png";
busIcon.classList.add('bus-icon-size');
imageDiv.appendChild(busIcon);

let company = document.createElement('p');
company.classList.add('no-margins')
let setCompanyText = document.createTextNode("Empresa: " + companyText);
company.appendChild(setCompanyText);

let contact = document.createElement('p');
contact.classList.add('no-margins')
let setContactText = document.createTextNode("Contacto: " + phoneText);
contact.appendChild(setContactText);

let website = document.createElement('p');
website.classList.add('no-margins')
let setWebsiteText = document.createTextNode("Pagina oficial: " + websiteText);
website.appendChild(setWebsiteText);

textDiv.appendChild(company);
textDiv.appendChild(contact);
textDiv.appendChild(website);

}





function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}