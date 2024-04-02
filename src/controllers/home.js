module.exports = {
    async pagInicialGet(req, res){
    res.render('../views/index');
    },

    async loginGet(req, res){
        res.render('../views/login', {resultado: true})
    },

    async pageSelectGet(req, res){
        res.render('../views/page_select')
    },

    async newPageGet(req, res){
        res.render('../views/new_page')
    }
}

