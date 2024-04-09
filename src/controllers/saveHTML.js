const { where } = require('sequelize');
const paginaHTML = require('../model/paginaHTML');

module.exports = {
    async save(req, res){  
        await paginaHTML.destroy({
            raw: true,
            attributes: ['IDPagina', 'IDUsuario'],
            where: {IDPagina: global.currentPage, IDUsuario: global.currentUser}
        });

        console.log(req.body.html);
        const page = req.body.html;

        console.log(global.currentUser);

        await paginaHTML.create({
            HTMLContent: page,
            IDUsuario: global.currentUser,
            IDPagina: global.currentPage
        });

        res.send("HTML saved");
    },
     async getHTML(req, res){
        
        const valor = await paginaHTML.findOne(
            {
                where: {
                    IDUsuario: req.query.id_user,
                    IDPagina: req.query.id_page
                }
            }
        )
        if (!valor) return;

        res.send(valor.HTMLContent)
     }
}