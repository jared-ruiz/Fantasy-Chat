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

//sessions + sequelize modules
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sess = {
//   secret: 'test',
//   cookies: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// }

//use session
// app.use(session(sess));

//handlebars template engine code
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//utilize routes
app.use(routes);

//connection to db and server
//switch to true when dropping tables (when updating table relationship logic)
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
})