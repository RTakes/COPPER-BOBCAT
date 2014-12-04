angular.module('copperBobcat.questions', [])
.controller('QuestionsController', function ($scope, Questions, $http) {

  angular.extend($scope, Questions);

}).factory('Questions', function() {
  //Linked list?
  var questions = {};
  questions.list = [{question:"\nfunction add(a, b) {\n return a + b \n} \nadd(12, 3)", answer: '15'}];
  questions.index = 0;
  questions.isAnswered = false;
  
  questions.tap = function(){
    if(questions.isAnswered) {
      questions.isAnswered = false;
      questions.index += 1;
    } else {
      questions.isAnswered = true;
    }
  };

  return {
    questions: questions
  };

});