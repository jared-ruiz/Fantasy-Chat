const router = require('express').Router();

//groups routes from api folder
const apiRoutes = require('./api');
//home routes
const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);
//dashboard routes
const dashboardRoutes = require('./dashboard-routes.js');

//access api routes through /api ie: (/api/users/1)
router.use('/api', apiRoutes);
//dashboard use
router.use('/dashboard', dashboardRoutes);

//if requested route does not exist, trigger error
router.use((req, res) => {
    res.status(500).end();
})


module.exports = router;