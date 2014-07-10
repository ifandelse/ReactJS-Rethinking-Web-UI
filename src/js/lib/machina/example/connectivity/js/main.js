require.config( {
	paths : {
		text             : "../../../bower/requirejs-text/text",
		backbone         : '../../../bower/backbone/backbone',
		underscore       : '../../../bower/underscore/underscore',
		mockjax          : '../../../bower/jquery-mockjax/jquery.mockjax',
		machina          : '/lib/machina',
		'machina.postal' : '../../../bower/machina.postal/lib/machina.postal',
		postal           : '../../../bower/postal.js/lib/postal',
		'postal.diags'   : '../../../bower/postal.diagnostics/lib/postal.diagnostics.min',
        jquery           : '../../../bower/jquery/jquery'
	},
	shim : {
		mockjax : [ 'jquery' ],
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore : {
            exports: "_"
        }
	}
} );

// This first require statement is pulling in foundational libraries
require( [
	'jquery',
	'mockjax',
	'machina.postal',
	'postal.diags'
],
	function ( $ ) {

		require( ['app'], function ( app ) {
			// mockjax setup
			// Mocked response for the heartbeat check
			$.mockjax( {
				url : "heartbeat",
				type : "GET",
				response : function ( settings ) {
					if ( app.simulateDisconnect ) {
						this.isTimeout = true;
					} else {
						this.responseText = { canYouHearMeNow : "good" }
					}
				}
			} );
			// more for convenience, our app gets a global namespace
			window.app = app;
		} );

	}
);