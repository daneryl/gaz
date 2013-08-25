'use strict';

describe('Service: ReportGenerator', function () {

	// load the service's module
	beforeEach(module('gazApp'));

	// instantiate service
	var ReportGenerator;
	beforeEach(inject(function(_ReportGenerator_) {
		ReportGenerator = _ReportGenerator_;
	}));

	it('should do something', function () {
		expect(!!ReportGenerator).toBe(true);
	});

	it("should create a report based on a string pattern and array values passed", function(){

		var pattern = "$index$ test $value$ string";
		var values = ["value1", "value2"];

		var report = ReportGenerator.generate(pattern, values);

		var results = report.split("\n");

		expect(results.length).toBe(3);
		expect(results[0]).toBe("1 test value1 string");
		expect(results[1]).toBe("2 test value2 string");

	});

});
