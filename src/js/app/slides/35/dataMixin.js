define([
    "postal",
    "lodash"
], function(postal, _) {
    return {
        publish: function(topic, data) {
            postal.publish({
                channel: this.props.channel,
                topic : topic,
                data : data
            });
        },
        subscribe: function(topic, callback) {
            if(!this.hasOwnProperty("subscriptions")) {
                this.subscriptions = {};
            }
            if(!this.subscriptions.hasOwnProperty(topic)) {
                this.subscriptions[topic] = postal.subscribe({
                    channel: this.props.channel,
                    topic: topic,
                    callback: callback
                }).withContext(this);
            }
        },
        disposeSubscriptions: function() {
            _.each(this.subscriptions, function(sub){
                sub.unsubscribe();
            });
            this.subscriptions = {};
        }
    };
});