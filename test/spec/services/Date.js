'use strict';

describe('Service: Date', function () {

	// load the service's module
	beforeEach(module('gazApp'));

	// instantiate service
	var Date;
	beforeEach(inject(function(_Date_) {
		Date = _Date_;
	}));

	it('should do something', function () {

		expect(!!Date).toBe(true);

	});

	it("returns today formatted date on .now", function(){

		spyOn(XDate.prototype, "toString").andReturn("formatted date");

		var expected_date = Date.now();

		expect(XDate.prototype.toString).wasCalledWith("dd/MM/yyyy HH:mm:ss");
		expect(expected_date).toBe("formatted date");

	});

	it('generates an array with 24h time interval every 30 mins', function(){

		var time_interval = Date.generate_interval("11/07/2011 14:45:30");

		expect(time_interval.length).toBe(48);
		expect(time_interval[0]).toBe("11/07/2011 14:45:30");
		expect(time_interval[1]).toBe("11/07/2011 15:15:30");
		expect(time_interval[46]).toBe("12/07/2011 13:45:30");
		expect(time_interval[47]).toBe("12/07/2011 14:15:30");

	});

	it('returns false on bad formatted date', function(){

		var time_interval = Date.generate_interval("bad date");
		expect(time_interval).toBe(false);

	});

});
