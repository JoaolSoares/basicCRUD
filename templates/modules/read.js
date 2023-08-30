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

function drawUsers() {
	document.addEventListener("DOMContentLoaded", () => {
		fetch("http://localhost:5000/pessoas")
			.then(response => response.json())
			.then(data => {
				if (data.length > 0) {
					const tableContainer	= document.querySelector(".table-container");
					const table				= document.createElement("table");
					table.classList.add("table-users")
				  
					createTableHeader(table);
			
					data.forEach(element => {
						addUserToTable(table, element)
					});
				  
					tableContainer.appendChild(table);
				}
			})
			.catch(error => {
				console.error('Erro:', error);
			});
	});
}

// Main
drawUsers();
