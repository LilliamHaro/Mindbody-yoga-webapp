var app = angular.module('app', []);
app.controller('eventCtrl', function($scope, $http) {
	$http.get('https://api.myjson.com/bins/5bdb3')
    .then(function(response) {
        $scope.programs = response.data;
    });

    $http.get('https://api.myjson.com/bins/47axv')
    .then(function(response) {
        $scope.prices = response.data;
    });

    $scope.toggle         =  false;
    $scope.toggle_text    = 'more';
    $scope.toggle_pricing =  function(){
    	if ( $scope.toggle ) {
    		$scope.toggle      =  false;
    		$scope.toggle_text = 'more';
    	}
    	else {
    		$scope.toggle      =  true;
    		$scope.toggle_text = 'less';
    	}
    };
});
