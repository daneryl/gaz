'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('gazApp'));

  var MainCtrl,
  scope,
  Date,
  ReportGenerator;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    Date = {generate_interval:function(){}, now:function(){return "now"}}
    ReportGenerator = {generate:function(){}}
    spyOn(ReportGenerator, "generate").andCallFake(function(){return "logs"});
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Date: Date,
      ReportGenerator: ReportGenerator
    });
  }));

  it("should attach an initial date to $scope", function(){
    expect(scope.options.date).toBe("now");
  })

  it("should attach degrees string on scope", function(){
    expect(scope.options.degrees).toBe("40.0");
  });

  it("should attach error string on scope", function(){
    expect(scope.error).toBe(false);
  });

  it("should attach false to random temperature on scope", function(){
    expect(scope.options.random_temperature).toBe(false);
  });

  it("should set to scope.log ReportGenerator when scope.generate_interval", function(){

    var mock_interval = "time_interval";
    spyOn(Date, "generate_interval").andCallFake(function(){return mock_interval})

    scope.options.date = "date_string";
    scope.options.degrees = "40.0";

    scope.generate();

    expect(Date.generate_interval).toHaveBeenCalledWith("date_string");

    expect(ReportGenerator.generate).toHaveBeenCalledWith(mock_interval, scope.options.degrees, scope.options.random_temperature);

    expect(scope.log).toBe("logs");

  });

  it('should generate the log when random_flag changes', function(){
    var mock_interval = "time_interval";
    spyOn(Date, "generate_interval").andCallFake(function(){return mock_interval})
    scope.options.date = "date_string";
    scope.options.degrees = "40.0";

    scope.$apply(function() {
      scope.options.random_temperature = true;
    })

    expect(Date.generate_interval).toHaveBeenCalledWith("date_string");
    expect(ReportGenerator.generate).toHaveBeenCalledWith(mock_interval, scope.options.degrees, scope.options.random_temperature);
    expect(scope.log).toBe("logs");
  });

  it("should generate log on instance", function() {
    expect(scope.log).toBe("logs");
  })

  it("should set scope.error if Date generate_interval returns false", function(){

    spyOn(Date, "generate_interval").andCallFake(function(){return false});

    scope.generate();

    expect(scope.error).toBe(true);

  });

});
