const { Router } = require('express');
const data = require('../sample.json');

const router = Router();

router.get('/', (req, res) => {

    res.json(data)
})

router.post('/', (req, res) => {
    const id = data.length + 1;
    const newData = { id, ...req.body}
    data.push(newData);
    res.json(data)
})

module.exports = router;