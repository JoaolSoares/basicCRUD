from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite"

db = SQLAlchemy(app)

class Pessoa(db.Model):
	__tablename__	= 'pessoa'
	_id				= db.Column(db.Integer, primary_key=True, autoincrement=True)
	name			= db.Column(db.String(100))
	email			= db.Column(db.String(100), unique=True)
	birthDate		= db.Column(db.String(10))

	def __init__(self, name, email, birthDate):
		self.name		= name
		self.email		= email
		self.birthDate	= birthDate

with app.app_context():
	db.create_all()


# @app.route('/pessoa', methods=['POST'])
# def createNew():
# 	newPerson = request.get_json()
# 	pessoas.append(newPerson)

# 	return pessoas


# @app.route('/pessoa/<int:id>', methods=['GET'])
# def getById(id):
	# for pessoa in pessoas:

	# 	if pessoa.get('id') == id:
	# 		return jsonify(pessoa)


# @app.route('/pessoa/<int:id>', methods=['PUT'])
# def updateById(id):
# 	updatedPerson = request.get_json();
# 	for i, pessoa in enumerate(pessoas):
# 		if pessoa.get('id') == id:
# 			pessoas[i].update(updatedPerson)
# 			return jsonify(pessoas[i])
		

# @app.route('/pessoa/<int:id>', methods=['DELETE'])
# def deleteById(id):
# 	for i, pessoa in enumerate(pessoas):
# 		if pessoa.get('id') == id:
# 			del pessoas[i]

# 	return jsonify(pessoas)


# @app.route('/pessoas', methods=['GET'])
# def getAll():
# 	return (jsonify(pessoas))


if __name__ == "__main__":
	app.run(port=5000, host="localhost", debug=True)