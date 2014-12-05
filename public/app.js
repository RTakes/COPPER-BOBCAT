var bobcatApp = angular.module('copperBobcat', [
  'ui.router',
  'copperBobcat.questions',
  'hljs',
  'ngTouch',
  'ngMaterial'
]);

bobcatApp.config(
function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
    $stateProvider
      .state('question', {
      	url: '/',
        templateUrl: '/questions/questions.html',
        controller: 'QuestionsController'
      })
      .state('finished', {
        url: '/questions/finished',
        templateUrl: '/questions/finished.html'
      });
});


//random name.