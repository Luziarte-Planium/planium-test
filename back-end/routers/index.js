const express = require("express")
const routers = express.Router()

//importar controllers
const plansPricesController = require("../controllers/plans_prices_controller")
const beneficiariosController = require("../controllers/beneficiarios_controller")
const propostaController = require("../controllers/proposta_controller")

//planos
routers.get('/planos', plansPricesController.All)

//beneficiarios
routers.get('/beneficiarios', beneficiariosController.All)
routers.post('/beneficiarios-cadastrar', beneficiariosController.Insert)

//proposta
routers.get('/proposta', propostaController.All)
routers.get('/proposta-find', propostaController.Find)
routers.post('/proposta-cadastrar', propostaController.Insert)

module.exports = routers