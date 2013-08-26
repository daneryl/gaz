'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('gazApp'));

    var MainCtrl,
        scope,
        Date,
        ReportGenerator;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller) {
        scope = {};
        Date = {generate_interval:function(){}, now:function(){return "now"}}
        ReportGenerator = {generate:function(){}}
        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            Date: Date,
            ReportGenerator: ReportGenerator
        });
    }));

    it('should attach a log string to scope', function() {
        expect(scope.log).toBe("");
    });

    it("should attach an initial date to $scope", function(){
        expect(scope.date).toBe("now");
    })

    it("should attach degrees string on scope", function(){
        expect(scope.degrees).toBe("40.0");
    });
    
    it("should attach error string on scope", function(){
        expect(scope.error).toBe(false);
    });

    it("should set to scope.log ReportGenerator when scope.generate_interval", function(){

        var mock_interval = "time_interval";
        spyOn(Date, "generate_interval").andCallFake(function(){return mock_interval})
        spyOn(ReportGenerator, "generate").andCallFake(function(){return "logs"});
        
        scope.date = "date_string";
        scope.degrees = "40.0";

        scope.generate();

        expect(Date.generate_interval).toHaveBeenCalledWith("date_string");

        expect(ReportGenerator.generate).toHaveBeenCalledWith(mock_interval, scope.degrees);

        expect(scope.log).toBe("logs");

    });

    it("should set scope.error if Date generate_interval returns false", function(){

        spyOn(Date, "generate_interval").andCallFake(function(){return false});

        scope.generate();
     
        expect(scope.error).toBe(true);
        
    });

});
