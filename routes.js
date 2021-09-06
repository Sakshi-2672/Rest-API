const express = require('express');
const Controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.json({
        status : 'API is working',
        message : 'Welcome to RestAPI crafted with love!'
    });
});

router.route('/contacts')
    .get(Controller.index)
    .post(Controller.new);

router.route('/contacts/:contact_id')
    .get(Controller.view)
    .patch(Controller.update)
    .put(Controller.update)
    .delete(Controller.delete);

module.exports = router;