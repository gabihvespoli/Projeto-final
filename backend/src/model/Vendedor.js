const connection = require('../config/connection')

class Vendedor {
    constructor() {
        this.id;
        this.nome;
        this.negocio;
        this.endereco;
        this.cpf;
        this.email;
        this.telefone;
        this.senha;
        this.img;
    }

    cadastrar(req, res) {
        connection.query(
            `INSERT INTO vendedor ( nome, negocio, endereco, cpf, email, telefone, senha ) values ('${this.nome}', '${this.negocio}', '${this.endereco}', '${this.cpf}', '${this.email}', '${this.telefone}', '${this.senha}' )`,
            (error, result) => { 
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(201).json("Cadastro Efetuado")
                }
            }
        );
    }
}

module.exports = new Vendedor;