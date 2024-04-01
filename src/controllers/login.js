const usuario = require("../model/usuarios");

module.exports = {
    async checkLogin(req, res){
        const email = req.body.emaill;
        const password = req.body.passwordd;
        let resultado = true;

        const findedPerson = await usuario.findOne({
            raw: true,
            attributes: ['Email', 'Password'],
            where: {Email: email, Password: password}
        });

        if(findedPerson){
            console.log("Login Efetuado")
            res.redirect('/page_select')
        }
        else{
            resultado = false
            console.log("Senha Incorreta")
            res.render("../views/login", {resultado});
        }
    }

   
}