const { Router } = require('express');
const router = Router();


const PaymentController = require('../controllers/payments_controller')
const PaymentServices = require('../services/payment_service')

const PaymentInstance = new PaymentController(new PaymentServices())

// routes

router.get('/payment', function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
})

module.exports = router;

