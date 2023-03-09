class PaymentController {
    constructor(suscriptionService){
        this.suscriptionService = suscriptionService;
    }

    async getPaymentLink(req, res){
        try {
            const payment = await this.suscriptionService.createPayment(req);
            return res.json(payment)
        }catch(error){
            console.error(error)
            return res.status(500).json({error: true, msg: "Failed to create payment"})
        }
        
    }
}
module.exports = PaymentController;