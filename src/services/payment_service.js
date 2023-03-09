const axios = require('axios');


class PaymentService {
    async createPayment(req) {
        const url = "https://api.mercadopago.com/checkout/preferences";
        const data = req.body;
        const body = {
            payer_email: data.payer_email,
            items: data.items,
            back_urls: {
                success: "/success",
                pending: "/pending",
                failure: "/failure"
            },
            notification_url: "http://35.199.71.3:5000/notification",
            "external_reference": "Reference_1234"
        };

        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        return payment.data
    }
}

module.exports = PaymentService;

/*  */