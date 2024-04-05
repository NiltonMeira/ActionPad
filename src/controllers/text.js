const texto = require('../model/texto');

module.exports = {
    async textoInsert(req, res) {

        const dados = req.body;
        console.log(dados);

        await texto.create({
            Content: dados.content
        });
    }
}  
