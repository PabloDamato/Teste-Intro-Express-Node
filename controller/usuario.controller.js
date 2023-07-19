const usuario = [
    {
        nome: "root",
        sobrenome: "Default",
        idade: 30,
        email: "root@gmail.com",
        senha: 999,
        logradouro: {
          rua: "Rua Jardins",
          numero: 157,
          cidade: "São Paulo",
          estado: "SP",
          pais: "Brasil"
        },
        telefone: 11999999999,
    },

    {
        nome: "admin",
        sobrenome: "Default",
        idade: 30,
        email: "admin@gmail.com",
        senha: 999,
        logradouro: {
          rua: "Rua Jardins",
          numero: 157,
          cidade: "São Paulo",
          estado: "SP",
          pais: "Brasil"
        },
        telefone: 11999999998,
    },

    {
        nome: "User",
        sobrenome: "Default",
        idade: 30,
        email: "user@gmail.com",
        senha: 999,
        logradouro: {
          rua: "Rua Jardins",
          numero: 157,
          cidade: "São Paulo",
          estado: "SP",
          pais: "Brasil"
        },
        telefone: 11999999997,
    }
]

const findAll = (request, response) => {
    response.send(usuario);
}

const find = (request, response) => {
    const nome = request.params.nome;
    let found = false;

    usuario.map(function(valor){
        if (valor.nome == nome) {
            found = true;
            return response.send(valor);
        }
    });

    if(!found){
        response.status(404).send({message: "Usuário não foi encontrado"});
    }
}

const createUsuario = (request, response) => {
    const user = request.body;

    if (Object.keys(user).length === 0) {
        return response.status(400).send({message: "O corpo da mensagem está vazio!"});
    }

    if(!user.nome){
        return response.status(400).send({message: "O campo 'nome' não foi encontrado!"});
    }

    if(!user.sobrenome){
        return response.status(400).send({message: "O campo 'sobrenome' não foi encontrado!"});
    }

    if(!user.idade){
        return response.status(400).send({message: "O campo 'idade' não foi encontrado!"});
    }

    if(!user.email){
        return response.status(400).send({message: "O campo 'email' não foi encontrado!"});
    }

    if(!user.senha){
        return response.status(400).send({message: "O campo 'senha' não foi encontrado!"});
    }

    if(!user.logradouro.rua){
        return response.status(400).send({message: "O campo 'rua' não foi encontrado!"});
    }

    if(!user.logradouro.numero){
        return response.status(400).send({message: "O campo 'numero' não foi encontrado!"});
    }

    if(!user.logradouro.cidade){
        return response.status(400).send({message: "O campo 'cidade' não foi encontrado!"});
    }

    if(!user.logradouro.estado){
        return response.status(400).send({message: "O campo 'estado' não foi encontrado!"});
    }

    if(!user.logradouro.pais){
        return response.status(400).send({message: "O campo 'pais' não foi encontrado!"});
    }

    if(!user.telefone){
        return response.status(400).send({message: "O campo 'telefone' não foi encontrado!"});
    }

    usuario.push(user);
    response.status(201).send(usuario);
}

const updateUsuario = (request, response) => {
    const nome = request.params.nome;
    const user = request.body;
    let found = false;

    if (Object.keys(user).length === 0) {
        return response.status(400).send({message: "O corpo da mensagem está vazio!"});
    }

    if(!user.nome){
        return response.status(400).send({message: "O campo 'nome' não foi encontrado!"});
    }

    if(!user.sobrenome){
        return response.status(400).send({message: "O campo 'sobrenome' não foi encontrado!"});
    }

    if(!user.idade){
        return response.status(400).send({message: "O campo 'idade' não foi encontrado!"});
    }

    if(!user.email){
        return response.status(400).send({message: "O campo 'email' não foi encontrado!"});
    }

    if(!user.senha){
        return response.status(400).send({message: "O campo 'senha' não foi encontrado!"});
    }

    if(!user.logradouro.rua){
        return response.status(400).send({message: "O campo 'rua' não foi encontrado!"});
    }

    if(!user.logradouro.numero){
        return response.status(400).send({message: "O campo 'numero' não foi encontrado!"});
    }

    if(!user.logradouro.cidade){
        return response.status(400).send({message: "O campo 'cidade' não foi encontrado!"});
    }

    if(!user.logradouro.estado){
        return response.status(400).send({message: "O campo 'estado' não foi encontrado!"});
    }

    if(!user.logradouro.pais){
        return response.status(400).send({message: "O campo 'pais' não foi encontrado!"});
    }

    if(!user.telefone){
        return response.status(400).send({message: "O campo 'telefone' não foi encontrado!"});
    }

    usuario.map(function(valor, index){
        if (valor.nome == nome) {
            found = true;
            usuario[index] = user;
            return response.send(usuario[index]);
        }
    });

    if(!found){
        response.status(404).send({message: "Usuário não foi encontrado"});
    }
}

const deleteUsuario = (request, response) => {
    const nome = request.params.nome;
    let found = false;

    usuario.map(function(valor, index){
        if (valor.nome == nome) {
            found = true;
            usuario.splice(index, 1);
            return response.send(valor);
        }
    });

    if(!found){
        response.status(404).send({message: "Não foi encontrado"});
    }
}

module.exports = {
    findAll,
    find,
    createUsuario,
    updateUsuario,
    deleteUsuario
}