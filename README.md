# SimpleCRUD

## Resumo do desafio:

Você deverá desenvolver um simples CRUD dos seguintes dados referentes a uma pessoa: nome, email, data de nascimento.

### Endpoints
Nós esperamos que você disponibilize uma aplicação REST com os seguintes endpoints:

- `[POST] /pessoa` - cadastra uma nova pessoa
- `[GET] /pessoa/{id}` - retorna os dados de uma pessoa em específico
- `[PUT] /pessoa/{id}` - altera os dados de uma pessoa em específico
- `[DELETE] /pessoa/{id}` - deleta os dados de uma pessoa em específico
- `[GET] /pessoas` - retorna uma lista de pessoas cadastradas

### Frontend
Nós esperamos que você disponibilize uma aplicação frontend que atenda os seguintes requisitos:

- Como um usuário, eu desejo ver uma lista de pessoas cadastradas
- Como um usuário, eu desejo ter a possibilidade de editar os dados de alguma pessoa a lista
- Como um usuário, eu desejo ter a possibilidade de remover alguma pessoa da lista
- Como um usuário, eu desejo ter a possibilidade de adicionar uma ou mais pessoas à lista


## Como Utilizar

- Clone o repositorio do git hub com `git clone https://github.com/JoaolSoares/simpleCRUD`;
- Instale as dependencias do projeto com `pip install -r requirements.txt`;

Com o repositorio salvo e suas dependencias devidamente instaladas, podemos prosseguir para as proximas etapas
- Execute o arquivo `app.py` com `python3 src/app.py`;
- abra o arquivo `index.html` normalmente ou por live-server;

Com todos estes passos, o projeto esta pronto para ser utilizado e testado

Existem 3 ações que podem ser feitas com o projeto rodando:
- Adicionar um novo usuario - pelo preenchimento do formulario;
- Editar um usuario ja existente - pelo respectivo botão ao lado do usuario e preenchimento do formulario novamente;
- Deletar um usuario - pelo respectivo botão ao lado do usuario;

### Explicações tecnicas
## O por que do uso das ferramentas
- python Flask - foi utilizado para a criação da API, foi escolhida por ser simples de se utilizar e muito versatil

- SQLite - Banco de dados relacionais SQL, foi escolhido por se encaixar melhor em um projeto fechado como um desafio, tem facil manipulação e criação.

- JavaScript, HTML, CSS - são as ferramentas basicas para o front-end, foram escolhidas por eu ja saber trabalhar com elas e serem mais simples, pois, como tenho foco em back-end não tenho muita profissiencia em ferramentas como React, Angular e etc

## disclaimer
Se observarem no codigo, poderam reparar em trechos de codigo repetidos como as funções CleanInputs e AddUserToTable, elas se repetiram pois a modularização em JavaScript vanilla funciona apenas em ambientes servidores, como o live-server, para ficar mais versatil e simples o projeto, optei por manter a funcionalidade do projeto em ambientes não servidores, acarretando assim em codigo repetido em diferentes arquivos
