const fs = require("fs")
const beneficiarios = require("../db/beneficiarios.json")

const beneficiariosController = {
    All : (req, res) => {
        try {
            //retorna lista json
            return res.status(201).json(beneficiarios)
        } catch (error) {
            //error
            res.status(403).json({message:`Houve um erro : ${error}`})
        }
    },
    
    Insert : (req, res) => {
        try {
            //Armazenar valores body
            data = {...req.body}
            
            //carregar arquivo json
            const file = JSON.parse(fs.readFileSync('./db/beneficiarios.json'))
            
            //adicionar valor body no array json

            file.push({"codigo" : beneficiarios.length + 1,...data, "quantidade" : data.beneficiario.length})

            //Adicionar valores no arquivo json
            fs.writeFileSync('./db/beneficiarios.json', JSON.stringify(file, null, 2));

            //sucesso
            res.status(201).json({message:"Cadastrado com sucesso!"});
            
        } catch (error) {
            //error
            res.status(403).json({message:`Houve um erro : ${error}`})
        }
        
    }
}

module.exports = beneficiariosController