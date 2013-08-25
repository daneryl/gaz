'use strict';

angular.module('gazApp').factory('ReportGenerator', function() {
  // Service logic
  // ...

  // Public API here
	return {
		generate: function(pattern, values) {

			var report = '';

			angular.forEach(values, function(value, index){

				var line = pattern.replace('$index$', index+1);
				line = line.replace('$value$', value);

				report += line+'\n';

			});

			return report;
		}

	};

});
