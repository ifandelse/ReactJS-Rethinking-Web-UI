define([
	"postal"
], function(postal) {
	postal.subscribe({
		channel: "form-example",
		topic: "data.request",
		callback: function(d, e) {
			setTimeout(function() {
				postal.publish({
					channel: "form-example",
					topic: "data.response",
					data: {
                    firstName: "Jim",
                    lastName: "Cowart",
                    city: "Chattanooga"
					}
				});
            }, 4000);
		}
	});
});