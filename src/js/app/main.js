require.config( {
    baseUrl: "/",
    paths: {
        backbone                  : "js/lib/backbone/backbone",
        conduitjs                 : "js/lib/conduitjs/lib/conduit",
        css                       : "js/lib/require-css/css",
        d3                        : "js/lib/d3/d3",
        jquery                    : "js/lib/jquery/dist/jquery",
        json                      : "js/lib/requirejs-plugins/src/json",
        jsx                       : "js/lib/jsx-requirejs-plugin/js/jsx",
        JSXTransformer            : "js/lib/react/JSXTransformer",
        lodash                    : "js/lib/lodash/dist/lodash",
        machina                   : "js/lib/machina/lib/machina",
        markdown                  : "js/lib/markdownjs/markdown",
        markdownslide             : "js/app/components/MarkdownSlide",
        mousetrap                 : "js/lib/mousetrap/mousetrap",
        postal                    : "js/lib/postal.js/lib/postal",
        "postal.request-response" : "js/lib/postal.request-response/lib/postal.request-response",
        react                     : "js/lib/react/react-with-addons",
        "react.animate"           : "js/lib/react.animate/react.animate",
        text                      : "js/lib/requirejs-text/text",
        underscore                : "js/lib/underscore/underscore",
        titledslide               : "js/app/components/TitledSlide"
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