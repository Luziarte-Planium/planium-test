const fs = require("fs")
const plans = require("../db/plans.json")
const prices = require("../db/prices.json")
const beneficiarios = require("../db/beneficiarios.json")
const propostas = require("../db/proposta.json")

const plansPrices = (plano) => plans.filter(filter => filter.nome === plano).map(joinplans => {
    return prices.find(joinPrice => joinPrice.codigo === joinplans.codigo)
})

const propostaFind = () => beneficiarios.filter(filter => filter.codigo === beneficiarios.length).map(joinBeneficiarios => {              
    for(let index = 0; index < joinBeneficiarios.beneficiario.length; index++){
        if(joinBeneficiarios.beneficiario[index].idade <= 17){
            joinBeneficiarios.beneficiario[index] = {...joinBeneficiarios.beneficiario[index], "preco":plansPrices(joinBeneficiarios.plano)[0].faixa1}
        
            }else  if(joinBeneficiarios.beneficiario[index].idade > 17 && joinBeneficiarios.beneficiario[index].idade <= 40){
            joinBeneficiarios.beneficiario[index] = {...joinBeneficiarios.beneficiario[index], "preco":plansPrices(joinBeneficiarios.plano)[0].faixa2}

            }else if(joinBeneficiarios.beneficiario[index].idade > 40){
            joinBeneficiarios.beneficiario[index] = {...joinBeneficiarios.beneficiario[index], "preco":plansPrices(joinBeneficiarios.plano)[0].faixa3}
            }
        }
        return {...joinBeneficiarios, "precoTotal" : joinBeneficiarios.beneficiario.reduce((a,b) => a + b.preco ,0)}
    })

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
            return res.status(201).json(propostaFind())
             
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
            
            file.push(...propostaFind())
            
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

