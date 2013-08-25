describe("XDate custom parsing", function(){


	it("parses correctly month/day/fullYear string types", function(){
	
		var date = parseDMY("10/06/2012");
		var string_date = date.toString("dd/MM/yyyy")

		expect(string_date).toBe("10/06/2012");
	})

	it("parses correctly month/day/fullYear-hours:minutes string types", function(){
	
		var date = parseDMYWithTime("11/07/2011-14:45");
		var string_date = date.toString("dd/MM/yyyy");
		var string_time = date.toString("HH mm");
	
		expect(string_date).toBe("11/07/2011");
		expect(string_time).toBe("14 45");	
	})

	it("parses correctly month/day/fullYear hours:minutes string types", function(){
	
		var date = parseDMYWithTime("11/07/2011 14:45");
		var string_date = date.toString("dd/MM/yyyy");
		var string_time = date.toString("HH mm");

		expect(string_date).toBe("11/07/2011");
		expect(string_time).toBe("14 45");
	})

	it("parses correctly month/day/fullYear hours string types", function(){

		var date = parseDMYWithTime("11/07/2011 14");
		var string_date = date.toString("dd/MM/yyyy");
		var string_time = date.toString("HH mm");

		expect(string_date).toBe("11/07/2011");
		expect(string_time).toBe("14 00");
	})

	it("parses correctly month/day/fullYear-hours:minutes:seconds string types", function(){

		var date = parseDMYWithTimeAndSecons("11/07/2011-14:45:25");
		var string_date = date.toString("dd/MM/yyyy");
		var string_time = date.toString("HH mm ss");

		expect(string_date).toBe("11/07/2011");
		expect(string_time).toBe("14 45 25");
	})

	it("parses correctly month/day/fullYear hours:minutes:seconds string types", function(){

		var date = parseDMYWithTimeAndSecons("11/07/2011 14:45:25");
		var string_date = date.toString("dd/MM/yyyy");
		var string_time = date.toString("HH mm ss");
		
		expect(string_date).toBe("11/07/2011");
		expect(string_time).toBe("14 45 25");
	})

	it("returns the correct timestamp on getTimestamp", function(){

		var date = new XDate("11/07/2011-14:45");
		expected_timestamp = Math.round(date.getTime() / 1000);

		var timestamp = date.getTimestamp(); 

		expect(expected_timestamp).toBe(timestamp);
	})

	it("parse correctly leading zeros times like 08:00 or 09:30", function(){

		var date = new XDate("11/07/2011-08:00");
		expect(date.getHours()).toBe(8);
		
		var date = new XDate("11/07/2011-09:30");
		expect(date.getHours()).toBe(9);
		expect(date.getMinutes()).toBe(30);
	})

})
