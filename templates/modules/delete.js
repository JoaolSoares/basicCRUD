function deleteUser(id) {
	fetch(`http://localhost:5000/pessoa/${id}`, {
		method: 'DELETE'
	})
		.then(data => {
			const trToDelete	= document.getElementById(id);
			trToDelete.remove();
		})
		.catch(error => {
			console.error('Erro:', error);
		});
}
