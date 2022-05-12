const router = require('express').Router();

//groups routes from api folder
const apiRoutes = require('./api');
//home routes
const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

//access api routes through /api ie: (/api/users/1)
router.use('/api', apiRoutes);

//if requested route does not exist, trigger error
router.use((req, res) => {
    res.status(500).end();
})


module.exports = router;