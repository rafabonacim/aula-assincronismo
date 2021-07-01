let listaUsuarios= [];       

async function criarUsuario(nome,senha,email){
    const novoUsuario = {
        id: Number(listaUsuarios.length + 1),
        nome,
        senha,
        email,
        data_criacao:new Date()
    };
    listaUsuarios.push(novoUsuario);

    return novoUsuario;
}

const usuarios = {
    criar: async (req,res) => {
        const{nome,senha,email} = req.body; 

        const usuario = await criarUsuario(nome,senha,email);

        res.json(usuario).status(201);
    }
}

module.exports = usuarios