from flask import Flask, request, jsonify

app = Flask(__name__)

pessoas = []


@app.route('/pessoa', methods=['POST'])
def createNew():
	newPerson = request.get_json()
	pessoas.append(newPerson)

	return pessoas


@app.route('/pessoa/<int:id>', methods=['GET'])
def getById(id):
	for pessoa in pessoas:
		if pessoa.get('id') == id:
			return jsonify(pessoa)


@app.route('/pessoa/<int:id>', methods=['PUT'])
def updateById(id):
	updatedPerson = request.get_json();
	for i, pessoa in enumerate(pessoas):
		if pessoa.get('id') == id:
			pessoas[i].update(updatedPerson)
			return jsonify(pessoas[i])
		

@app.route('/pessoa/<int:id>', methods=['DELETE'])
def deleteById(id):
	for i, pessoa in enumerate(pessoas):
		if pessoa.get('id') == id:
			del pessoas[i]

	return jsonify(pessoas)


@app.route('/pessoas', methods=['GET'])
def getAll():
	return (jsonify(pessoas))


app.run(port=5000, host="localhost", debug=True)