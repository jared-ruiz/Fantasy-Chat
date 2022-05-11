const router = require('express').Router();

//groups routes from api folder
const apiRoutes = require('./api');

//access api routes through /api ie: (/api/users/1)
router.use('/api', apiRoutes);

//if requested route does not exist, trigger error
router.use((req, res) => {
    res.status(500).end();
})

module.exports = router;