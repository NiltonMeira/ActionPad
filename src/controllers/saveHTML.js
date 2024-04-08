const { where } = require('sequelize');
const paginaHTML = require('../model/paginaHTML');

module.exports = {
    async save(req, res){
        console.log(req.body.html);
        const page = req.body.html;

        console.log(global.currentUser);
        //adicionar lógica para salvar no banco
        await paginaHTML.create({
            HTMLContent: page,
            IDUsuario: global.currentUser
        });

        res.send("HTML saved");
    },
     async getHTML(req, res){
        
        const valor = await paginaHTML.findOne({where: {IDPaginaHTML: req.query.id}})

        res.send(valor.HTMLContent)
     }
}