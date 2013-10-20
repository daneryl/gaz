'use strict';

angular.module('gazApp').factory('ReportGenerator', function() {

  var temperature_interval = 0.0;

	return {
		generate: function(lines, temperature, random_temperature) {
			var report = '';
      temperature = parseFloat(temperature);

      var current_temperature = temperature;

      temperature_interval = 0.0;

      if(random_temperature) {
        temperature_interval = 0.5;
      }

      var that = this;

			angular.forEach(lines, function(value, index){
        var line_number = index+1;
				report += line_number+','+value+','+current_temperature.toFixed(1)+'\n';

        var modify_by = Math.random() < 0.5 ? -temperature_interval : temperature_interval;
        current_temperature = that.modify_temperature(temperature, current_temperature, modify_by);

			});

			return report;
		},

    modify_temperature: function(original, current, modify_by) {
      var new_temperature = current+modify_by;
      if(Math.abs(original - new_temperature) > 1){
        return current;
      }
      return new_temperature;
    }

	};

});
