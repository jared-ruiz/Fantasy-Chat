const sequelize = require('./config/connection');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
})