function cleanInputs() { 
	const inputName		= document.querySelector(".input-name");
	const inputEmail	= document.querySelector(".input-email");
	const inputBirth	= document.querySelector(".input-birthDate");

	inputName.value		= "";
	inputEmail.value	= "";
	inputBirth.value	= "";
}

function createTd(row, className, item) {
	const cell			= document.createElement("td");
	cell.textContent	= item;
	cell.classList.add(className);
	row.appendChild(cell);
}

function addUserToTable(table, user) {
	const row				= document.createElement("tr");
	row.id					= user.id;
	row.classList.add("one-user");

	createTd(row, "name-user",	user.name)
	createTd(row, "email-user",	user.email)
	createTd(row, "birth-user",	user.birthDate)

	const cellEdit			= document.createElement("td");
	cellEdit.innerHTML		= `<i class="fas fa-edit" onclick="editUser(${user.id})"></i>`;
	cellEdit.classList.add("btn-user-edit")
	row.appendChild(cellEdit);
	
	const cellDelete		= document.createElement("td");
	cellDelete.innerHTML	= `<i class="fas fa-trash-alt" onclick="deleteUser(${user.id})"></i>`;
	cellDelete.classList.add("btn-user-delete")
	row.appendChild(cellDelete);
	
	table.appendChild(row);
}

function register() {
	const inputName		= document.querySelector(".input-name").value;
	const inputEmail	= document.querySelector(".input-email").value;
	const inputBirth	= document.querySelector(".input-birthDate").value;

	if (inputName && inputEmail && inputBirth) {
		fetch("http://localhost:5000/pessoa", {
			method: 'POST',
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
				const table	= document.querySelector(".table-users")
				addUserToTable(table, {
					"id":			Number(table.lastChild.id) + 1,
					"name":			inputName,
					"email":		inputEmail,
					"birthDate":	inputBirth
				})
				cleanInputs();
			})
			.catch(error => {
				console.error('Erro:', error);
			});


	} else 
		window.alert("Erro na entrada de dados, tente novamente");
}
