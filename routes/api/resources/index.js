const 
    express = require('express'),
    router = express.Router();

router.use('/community', require('./community'));

router.use('/competition', require('./competition'));

router.use('/organization', require('./organization'));

router.use('/vendor', require('./vendor'));

router.use('/software', require('./software'));

module.exports = router;