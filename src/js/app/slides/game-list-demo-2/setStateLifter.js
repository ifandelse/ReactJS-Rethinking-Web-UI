define(["jquery"], function($) {
	return {
		promisifiedSetState : function(state) {
			var dfd = $.Deferred();
			this.setState(state, function() {
				dfd.resolve();
			});
			return dfd.promise();
		}
	};
});