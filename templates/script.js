function addUserToTable(table, user) {
	const row = document.createElement("tr");
	row.classList.add("one-user")

	createTd(row, "name-user", user.name)
	createTd(row, "email-user", user.email)
	createTd(row, "birth-user", user.birthDate)

	const cellEdit = document.createElement("td");
	cellEdit.classList.add("btn-user-edit")
	cellEdit.innerHTML = `<i class="fas fa-edit" onclick="editUser(${user.id})"></i>`;
	row.appendChild(cellEdit);

	const cellDelete = document.createElement("td");
	cellDelete.classList.add("btn-user-delete")
	cellDelete.innerHTML = `<i class="fas fa-trash-alt" onclick="deleteUser(${user.id})"></i>`;
	row.appendChild(cellDelete);

	table.appendChild(row);
}

function createTableHeader(table) {
	const headerRow = document.createElement("tr");
	const headers = ["Nome", "Email", "Data de Nascimento", "Editar", "Excluir"];
	headers.forEach(headerText => {
	  const headerCell = document.createElement("th");
	  headerCell.textContent = headerText;
	  headerRow.appendChild(headerCell);
	});
	table.appendChild(headerRow);
}

function createTd(row, className, item) {
	const cell = document.createElement("td");
	cell.classList.add(className);
	cell.textContent = item;
	row.appendChild(cell);
}

function drawUsers() {
	document.addEventListener("DOMContentLoaded", () => {
		fetch("http://localhost:5000/pessoas")
			.then(response => response.json())
			.then(data => {
				const tableContainer = document.querySelector(".table-container");
				const table = document.createElement("table");
				table.classList.add("table-users")
			  
				createTableHeader(table);
		
				data.forEach(element => {
					addUserToTable(table, element)
				});
			  
				tableContainer.appendChild(table);
			})
	});
}

drawUsers();
