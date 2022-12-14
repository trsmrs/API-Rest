const router = require('express').Router()

const ProductsController = require('../controllers/products')


// VERBOS HTTP (4 TIPOS)
// GET - obter dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELET - deletar dados









router.get('/products',ProductsController.get)
// router.post('/products',ProductsController.post)
// router.put('/products/:id',ProductsController.put)
// router.delete('/products/:id',ProductsController.delete)

module.exports = router