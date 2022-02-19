const { Router } = require('express');
const router = Router();
const orders = require('../controllers/orders')

//obtener todas las ordenes
router.get('/', orders.getAllOrders)

//obtener todas las ordenes de un vendedor
router.get('/userOrders', orders.getOrder)

// obtener una orden por id
router.get('/byId/:id', orders.getOrderById)

//creo una orden
router.post('/create', orders.createOrder)
 

//actualizo orden
router.put('/:id', orders.updateOrder)

//actualizo orden
router.delete('/:id', orders.deleteOrder)

module.exports = router;
