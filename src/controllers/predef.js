const ferramentas = require('../model/ferramentas');
const predefinicao = require('../model/predefinicoes');
const ferramentaPredf = require('../model/ferramentasPredef');

module.exports = {
    async ferramentasGet(req, res) {
        const ferramentasResponse = await ferramentas.findAll({
            raw: true,
            attributes: ['IDFerramentas', 'Descricao']
        })
        console.log(ferramentasResponse);
        res.render('../views/pred_creator', {ferramentasResponse});
    },

    async predefInsert(req, res) {
        const dados = req.body;

        await predefinicao.create({
            Name: dados.name 
        });

        const idPredef = predefinicao.IDPredefinicoes

        await ferramentaPredf.create({
            IDPredef: idPredef,
            IDFerramenta: dados.IDFerramenta
        });

        res.redirect('/');
    }

}