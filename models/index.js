const User = require('./User');
//model associations 
// User.hasMany(Post, {
//     foreignKey: 'user_id'
// })
// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'Cascade'
// })
module.exports = { User };