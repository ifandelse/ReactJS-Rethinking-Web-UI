require.config( {
    baseUrl: "/",
    paths: {
        lodash: "js/lib/lodash/dist/lodash",
        underscore: "js/lib/underscore/underscore",
        jquery: "js/lib/jquery/dist/jquery",
        conduitjs: "js/lib/conduitjs/lib/conduit",
        postal: "js/lib/postal.js/lib/postal",
        JSXTransformer: "js/lib/react/JSXTransformer",
        react: "js/lib/react/react-with-addons",
        text: "js/lib/requirejs-text/text",
        jsx: "js/lib/jsx-requirejs-plugin/js/jsx",
        machina: "js/lib/machina/lib/machina",
        mousetrap: "js/lib/mousetrap/mousetrap",
        d3: "js/lib/d3/d3",
        "react.animate": "js/lib/react.animate/react.animate",
        showdown: "js/lib/showdown/showdown.min",
        markdown: "js/lib/markdownjs/markdown",
        titledslide: "js/app/components/TitledSlide",
        markdownslide: "js/app/components/MarkdownSlide",
        css: "js/lib/require-css/css",
        backbone: "js/lib/backbone/backbone",
        "postal.request-response" : "js/lib/postal.request-response/lib/postal.request-response"
    },

    jsx: {
        fileExtension: '.jsx'
    },

    shim: {
        markdown: {
            exports: "markdown"
        },
        backbone: {
            deps: [ "underscore", "jquery" ],
            exports: "Backbone"
        }
    }
} );

define( [
    "jsx!js/app/presentation",
    "js/app/router",
    "jquery",
    "postal.request-response"
 ], function( Presentation, Router, $, postal ) {

    // We need to tell postal how to get a deferred instance
    postal.configuration.promise.createDeferred = function() {
        return new $.Deferred();
    };
    // We need to tell postal how to get a "public-facing"/safe promise instance
    postal.configuration.promise.getPromise = function(dfd) {
        return dfd.promise();
    };

    var presentation = new Presentation();
    $( function() {
        var router = new Router();
        Backbone.history.start();
        presentation.start();
    } );
} );