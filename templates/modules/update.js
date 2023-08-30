function createTableHeader(table) {
	const row				= document.createElement("tr");
	const headers			= ["Nome", "Email", "Data de Nascimento", "Editar", "Excluir"];

	headers.forEach(headerText => {
		const Cell			= document.createElement("th");
		Cell.textContent	= headerText;
		row.appendChild(Cell);
	});

	table.appendChild(row);
}

function saveNewUserInfo(id) {
	const inputName		= document.querySelector(".input-name").value;
	const inputEmail	= document.querySelector(".input-email").value;
	const inputBirth	= document.querySelector(".input-birthDate").value;

	if (inputName && inputEmail && inputBirth) {
		fetch(`http://localhost:5000/pessoa/${id}`, {
			method: 'PUT',
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				"name":			inputName,
				"email":		inputEmail,
				"birthDate":	inputBirth
			})
		})
			.then(data => {
				const trToUpdate	= document.getElementById(id);
				trToUpdate.querySelector(".name-user").textContent	= inputName;
				trToUpdate.querySelector(".email-user").textContent	= inputEmail;
				trToUpdate.querySelector(".birth-user").textContent	= inputBirth;

				const h1			= document.querySelector(".title");
				h1.textContent		= "Cadastre-se";

				const btn			= document.querySelector(".btn-register");
				btn.onclick			= register
				btn.value			= "Cadastrar";
				
				cleanInputs();

			})
			.catch(error => {
				console.error('Erro:', error);
			});
	} else
		window.alert("Erro na entrada de dados, tente novamente");
}

function editUser(id) {
	const h1				= document.querySelector(".title");
	h1.textContent			= "Edite-se";

	const btn				= document.querySelector(".btn-register");
	btn.onclick				= () => { saveNewUserInfo(id); };
	btn.value				= "Salvar";

	const inputName			= document.querySelector(".input-name");
	const inputEmail		= document.querySelector(".input-email");
	const inputBirth		= document.querySelector(".input-birthDate");

	fetch(`http://localhost:5000/pessoa/${id}`)
		.then(response => response.json())
		.then(data => {
			inputName.value		= data.name;
			inputEmail.value	= data.email;
			inputBirth.value	= data.birthDate;
		})
		.catch(error => {
			console.error('Erro:', error);
		});

	window.scroll({
		top:		0,
		behavior:	"smooth"
	});
}
