module.exports = {
    async pagInicialGet(req, res){
    res.render('../views/index');
    },

    async loginGet(req, res){
        res.render('../views/login')
    },

    async pageSelectGet(req, res){
        res.render('../views/page_select')
    }
}