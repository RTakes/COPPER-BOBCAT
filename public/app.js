var bobcatApp = angular.module('copperBobcat', [
  'ui.router',
  'copperBobcat.questions',
  'hljs',
  'ngTouch',
  'ngMaterial',
  'datatables'
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
        url: '/finished',
        templateUrl: '/questions/finished.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/login/login.html'
      }).state('admin', {
        url: '/admin', 
        templateUrl: '/admin/admin.html',
        controller: 'AdminController'
      })

});


//random name.