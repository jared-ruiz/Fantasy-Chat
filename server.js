const sequelize = require('./config/connection');
const express = require('express');
const path = require('path');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//static index.html for development purposes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//utilize routes
app.use(routes);

//connection to db and server
//switch to true when dropping tables (when updating table relationship logic)
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
})