const drawings = require("../model/drawing")
const fs = require('fs');

module.exports = {
    async postCanvasImage(req, res) {
        console.log("Salvando imagem!")

        const base64Image = req.body.image.split(';base64,').pop();
        const imagePath = `public/img/${new Date().toISOString()}-image.jpeg`;

        fs.writeFile(imagePath, base64Image, { encoding: 'base64' }, (err) => {
            if (err) {
                console.error('Error saving image:', err);
                // Handle error
                return;
            }
            console.log('Image saved successfully');
            // Proceed with your logic
        });

        await drawings.create({
            IDDraw: req.body.id,
            IDUsuario: req.body.user,
            Data: imagePath
        });

        res.send(200);
    }
}