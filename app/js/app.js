'use strict';


// Declare app level module which depends on filters, and services
var app=angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/noteList', {
		templateUrl: 'note/noteList.html',
		controller: 'MyCtrl1'
	});
	$routeProvider.when('/view2', {
		templateUrl: 'note/partial2.html',
		controller: MyCtrl2
	});
	$routeProvider.otherwise({
		redirectTo: '/view1'
	});
}]);




/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');



/* Controllers */
app.controller('MyCtrl1',function($scope){
	$scope.id="1";
	$scope.teacherName="wgt";
	$scope.courseNo="123";
	$scope.courseContent="不规则动词，褒贬中意思相近";
});




function MyCtrl2() {
}
MyCtrl2.$inject = [];




/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);



/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);