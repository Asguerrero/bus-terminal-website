const host ='https://terminalvillagarzon.herokuapp.com';


let name = document.getElementById("nameInput");
let lastname = document.getElementById("lastNameInput");
let email = document.getElementById("emailInput");
let type = document.getElementById("typeInput");
let message = document.getElementById("messageInput");
let button = document.getElementById("buttonSubmit");
let data = [];


button.addEventListener("click", send_data);

function send_data(){

	if(check()){
		console.log(check());
		console.log(data);

		fetch(host.concat('/pqrsds'), {
		  method: 'POST', // or 'PUT'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(res => res.json())
		.catch(error => alert("Hubo un problema con el envio del formulario. Por favor intentelo de nuevo") )
		.then(response => alert("Se ha enviado su formulario con exito"));

	}

	

}

function check(){
	if (name.value && lastname.value && email.value && type.value && message.value) {
		data = {
		  "Nombre": String(name.value),
		  "Apellidos": String(lastname.value),
		  "Correo": String(email.value) ,
		  "Tipo": String(type.value),
		  "Mensaje": String(message.value)
	};

	return true; 
		
	}
	else{
		alert("Por favor llena todos los campos del formulario antes de enviarlo");
		return false;
		
	}
}



