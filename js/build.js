({
    baseUrl: "",
    paths: {
        jquery: 'jquery.min',
        scrollto: 'jquery.scrollTo.min',
        magnificPopup: 'jquery.magnific-popup.min',
        jscookie: 'js.cookie',
        modernizr: 'modernizr-2.8.3.min',
        'pilot-lib/taster-offsite-panel': 'http://www.bbc.co.uk/taster/pilot-lib'
    },
    shim: {
         jquery: {
            exports: '$'
        },
        jscookie: 
        {
            deps: ['jquery'],
            exports: 'Cookies'
        },
        scrollto: 
        {
            deps: ['jquery']
        },
        magnificPopup: 
        {
            deps: ['jquery']
        },
        modernizr: 
        {
            exports: 'Modernizr'
        }
    },
    name: "main",
    out: "prod/main-built.js"
})