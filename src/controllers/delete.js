global.currentUser;
const usuario = require("../model/usuarios");

module.exports = {
    async removeLogin(req, res){     

        await usuario.destroy({
            raw: true,
            where: {IDUsuario: global.currentUser}
        });
        res.render('../views/index')
    }
}