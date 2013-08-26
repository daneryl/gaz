'use strict';

angular.module('gazApp').controller('MainCtrl', function($scope, Date, ReportGenerator) {
	
	$scope.log = '';
	$scope.date = Date.now();
	$scope.degrees = '40.0';
	$scope.error = false;


	$scope.generate = function() {
		$scope.error = false;

		var time_logs = Date.generate_interval($scope.date);

		if(time_logs === false) {
      $scope.error = true;
    }

		$scope.log = ReportGenerator.generate(time_logs, $scope.degrees);

	};


});
