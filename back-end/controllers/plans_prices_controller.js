const plans = require("../db/plans.json")
const prices = require("../db/prices.json")

const plansPricesController = {
    All : (req, res) => {
        try {
            //lista planos e preços 
            const plansMarge = plans.map( joinPlans => {
            const pricesMarge  = prices.find(joinPrices => joinPrices.codigo === joinPlans.codigo)
            if(pricesMarge) {
              return {...joinPlans, ...pricesMarge}
            }
          }
        )
        //retorna lista
        return res.status(201).json(plansMarge)
            
        } catch (error) {
            //error
            res.status(403).json({message:`Houve um erro : ${error}`})
        }
      
    }
}

module.exports = plansPricesController

