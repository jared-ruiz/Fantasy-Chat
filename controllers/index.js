const router = require('express').Router();

//groups routes from api folder
const apiRoutes = require('./api');
//home routes
const homeRoutes = require('./home-routes.js');
//dashboard routes
const dashboardRoutes = require('./dashboard-routes.js');

//access api routes through /api ie: (/api/users/1)
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

//if requested route does not exist, trigger error
router.use((req, res) => {
    res.status(500).end();
})

//export full routes to server.js
module.exports = router;