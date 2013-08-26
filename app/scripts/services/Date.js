'use strict';

angular.module('gazApp').factory('Date', function() {

	var date = new XDate();

	var init_date = function(miliseconds) {
		return date.setTime(miliseconds);
	};

	var generate = function() {
		var result = [];

		for (var interval = 0; interval < 48; interval++) {
      result.push(date.toString('dd/MM/yyyy HH:mm:ss'));
      date.addMinutes(30);
		}
		
		return result;
	};

	return {
		generate_interval: function(formatted_date) {

			var miliseconds = XDate.parse(formatted_date);

			if(isNaN(miliseconds)) {
        return false;
      }

			init_date(miliseconds);
			return generate();

		},

		now: function() {
			var date = new XDate();
			return date.toString('dd/MM/yyyy HH:mm:ss');
		}

	};
});
