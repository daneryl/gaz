'use strict';

angular.module('gazApp').controller('MainCtrl', function($scope, Date, ReportGenerator) {
	
	$scope.log = '';
	$scope.date = Date.now();
	$scope.degrees = '40.0';
	$scope.error = false;


	$scope.generate = function() {
		$scope.error = false;

		var time_logs = Date.generate_interval($scope.date);
		var pattern = '$index$, $value$, '+$scope.degrees;

		if(time_logs === false) {
      $scope.error = true;
    }

		$scope.log = ReportGenerator.generate(pattern, time_logs);

	};


});
