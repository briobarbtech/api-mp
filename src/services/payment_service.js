const axios = require('axios');

const routes = {
    '/15': {
        price: 100,
        duration: 15
    },
    '/30': {
        price: 200,
        duration: 30
    },
    '/60': {
        price: 400,
        duration: 60
    }
}
class PaymentService {
    async createPayment(req, res) {
        const url = "https://api.mercadopago.com/checkout/preferences";
        const body = {
            payer_email: "test_user_1852399889@testuser.com",
            items: [
                {
                    title: `Wifi x ${routes[req.route.path].duration}min`,
                    description: "Access to wifi network",
                    picture_url: "http://www.myapp.com/myimg.jpg",
                    category_id: "category123",
                    quantity: 1,
                    unit_price: routes[req.route.path].price
                }
            ],
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
        console.log(payment.data.init_point)
        return payment.data.init_point
    }

}

module.exports = PaymentService;

/*  */