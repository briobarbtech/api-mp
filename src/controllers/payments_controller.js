class PaymentController {
    constructor(suscriptionService) {
        this.suscriptionService = suscriptionService;
    }

    async getPaymentLink(req, res) {
       

        try {
            const payment = await this.suscriptionService.createPayment(req, res);
            return res.json(payment)
        } catch (error) {
            console.error(error)
        }
    }
}
module.exports = PaymentController;