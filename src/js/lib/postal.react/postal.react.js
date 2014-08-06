/**
 * postal.react - A ReactJS component mixin adding postal.js message bus behaviors to components.
 * Author: Jim Cowart (http://freshbrewedcode.com/jimcowart)
 * Version: v0.0.0
 * Url: https://github.com/postaljs/postal.react
 * License(s): MIT
 */

(function (root, factory) {
    if (typeof module === "object" && module.exports) {
        // Node, or CommonJS-Like environments
        module.exports = factory(require("react"), require("postal"));
    } else if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["react", "postal"], factory);
    } else {
        // Browser globals
        root.React.postal = factory(root.React, root.postal);
    }
}(this, function (React, postal) {
    return {
        publish: function (topic, data) {
            postal.publish({
                channel: this.props.channel,
                topic: topic,
                data: data
            });
        },
        subscribe: function (topic, callback) {
            if (!this.hasOwnProperty("subscriptions")) {
                this.subscriptions = {};
            }
            if (!this.subscriptions.hasOwnProperty(topic)) {
                this.subscriptions[topic] = postal.subscribe({
                    channel: this.props.channel,
                    topic: topic,
                    callback: callback
                }).withContext(this);
            }
        },
        disposeSubscriptions: function () {
            var key;
            for (key in this.subscriptions) {
                if (this.subscriptions.hasOwnProperty(key)) {
                    this.subscriptions[key].unsubscribe();
                }
            }
            this.subscriptions = {};
        }
    };
}));