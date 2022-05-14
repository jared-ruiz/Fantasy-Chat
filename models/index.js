const User = require('./User');
const Post = require('./Post');
//model associations 
 User.hasMany(Post, {
     foreignKey: 'user_id'
 })
 Post.belongsTo(User, {
    foreignKey: 'user_id',
     onDelete: 'Cascade'
 })
module.exports = { User, Post };