const plans = require("../db/plans.json")
const prices = require("../db/prices.json")
const beneficiarios = require("../db/beneficiarios.json")

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

module.exports = propostaFind