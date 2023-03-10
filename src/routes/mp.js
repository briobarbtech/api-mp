const { Router } = require('express');
const router = Router();


const PaymentController = require('../controllers/payments_controller')
const PaymentServices = require('../services/payment_service')

const PaymentInstance = new PaymentController(new PaymentServices())

// routes

router.get('/15', function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
})
router.get('/30', function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
})
router.get('/60', function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
})

module.exports = router;

