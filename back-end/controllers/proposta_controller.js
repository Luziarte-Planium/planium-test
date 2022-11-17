const fs = require("fs")
const calculoProposta = require("../services/calculo-proposta")
const propostas = require("../db/proposta.json")

const propostaController = {
    All : (req, res) => {
        try {
            //retorna lista
            return res.status(201).json(propostas)
            
        } catch (error) {
            //error
            res.status(403).json({message:`Houve um erro : ${error}`})
        }
      
    },

    Find : (req, res) => {
        try {
            //retorna lista      
            return res.status(201).json(calculoProposta())

        } catch (error) {
            //error
            res.status(403).json({message:`Houve um erro : ${error}`})
        }

    },

    Insert : (req, res) => {
        try {        
            //carregar arquivo json
            const file = JSON.parse(fs.readFileSync('./db/proposta.json'))
            
            //adicionar valor body no array json
            
            file.push(...calculoProposta())
            
            //Adicionar valores no arquivo json
            fs.writeFileSync('./db/proposta.json', JSON.stringify(file, null, 2));

            //sucesso
            res.status(201).json({message:"Proposta gerada com sucesso!"});
            
        } catch (error) {
            //error
            res.status(403).json({message:`Houve um erro : ${error}`})
        }
        
    }
}

module.exports = propostaController

