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

  describe('when modifyng temperature, if the diference on the original is more than 1 degree', function(){
    it('should return the same temperature', function(){
      var original_temperature = 40;
      var current_temperature = 39.5;
      var modify_by = -1;
      var modified_temperature = ReportGenerator.modify_temperature(original_temperature, current_temperature, modify_by);
      expect(modified_temperature).toBe(39.5);

      var modify_by = 5;
      var modified_temperature = ReportGenerator.modify_temperature(original_temperature, current_temperature, modify_by);
      expect(modified_temperature).toBe(39.5);
    });
  });

	it("should create a text report with every value in the array passed and random +- 1degree on temp for each line", function(){

		var values = ["value1", "value2", "value3", "value4", "value5", "value6"];
    var temperature = "40";

		var report = ReportGenerator.generate(values, temperature);

    var results = report.split("\n");

    expect(results.length).toBe(7);
    expect(results[0]).toMatch(/1, value1, 40/);
    expect(results[1]).toMatch(/2, value2, 39.5|40.5/);
    expect(results[2]).toMatch(/3, value3, 39.5|39|40|40.5|41/);
    expect(results[3]).toMatch(/4, value4, 39.5|39|40|40.5|41/);
    expect(results[4]).toMatch(/5, value5, 39.5|39|40|40.5|41/);
    expect(results[5]).toMatch(/6, value6, 39.5|39|40|40.5|41/);

  });

});
