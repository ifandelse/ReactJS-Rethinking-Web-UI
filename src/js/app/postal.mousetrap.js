define([
	"mousetrap",
	"postal"
], function( Mousetrap, postal ){

	var channel = postal.channel("navigation");
	
	Mousetrap.bind(['left', 'backspace'], function() {
	    channel.publish("previous", { cmd: "previous" });
	});
	Mousetrap.bind(['right', 'space', 'enter'], function() {
	    channel.publish("next", { cmd: "next" });
	});

	Mousetrap.bind('ctrl+alt+left', function(e) {
    	channel.publish("beginning", { cmd: "beginning" });
	});

});