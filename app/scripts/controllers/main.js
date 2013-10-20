'use strict';

angular.module('gazApp').controller('MainCtrl', function($scope, Date, ReportGenerator) {

  $scope.log = '';
  $scope.error = false;

  $scope.options = {};
  $scope.options.degrees = '40.0';
  $scope.options.date = Date.now();
  $scope.options.random_temperature = false;


  $scope.generate = function() {
    $scope.error = false;

    var time_logs = Date.generate_interval($scope.options.date);

    if(time_logs === false) {
      $scope.error = true;
    }

    $scope.log = ReportGenerator.generate(time_logs, $scope.options.degrees, $scope.options.random_temperature);
  };

  $scope.generate();

  $scope.$watch('options.random_temperature', function() {
    $scope.generate();
  });

});
