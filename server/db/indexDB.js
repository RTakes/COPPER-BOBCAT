var Sequelize = require('Sequelize');
var sequelize = new Sequelize('copperdb', 'copperdb', 'Copper2014!', {
	dialect: "sql",
	port: 3000,
});

var User = sequelize.define('user', {
  username: Sequelize.STRING
});

var Category = sequelize.define('category', {
  category: Sequelize.STRING
});

var Question = sequelize.define('question', {
  question: Sequelize.STRING,
  answer: Sequelize.STRING,
  difficulty: Sequelize.INTEGER
});

User.hasMany(Question);
Category.hasMany(Question);

User.sync();
Category.sync();
Question.sync();

exports.User = User;
exports.Category = Category;
exports.Question = Question;