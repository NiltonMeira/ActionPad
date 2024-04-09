global.currentPage;
const usuario = require('../model/usuarios')
module.exports = {
    async pagInicialGet(req, res) {
        res.render('../views/index');
    },

    async loginGet(req, res) {
        res.render('../views/login', { resultado: true })
    },

    async pageSelectGet(req, res) {
        res.render('../views/page_select')
    },

    async newPageGet(req, res) {
        res.render('../views/new_page')
    },

    async pageGet(req, res) {
        const user = global.currentUser;
        
        global.currentPage = req.query.id;
        
        const page = global.currentPage;
        
        //logica de qual pagina abrir
        res.render('../views/page', {user, page})
}
}

