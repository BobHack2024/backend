
const { signUp, getAllUsers } = require('./users');
const {postAnswers, getAllAnswers, getAllAnswersbyID} = require('./userQues')


var apis = {

  signUp: signUp,
  getAllUsers: getAllUsers,
  postAnswers : postAnswers,
  getAllAnswers:getAllAnswers,
  getAllAnswersbyID:getAllAnswersbyID,



};

module.exports = apis;
