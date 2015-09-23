/**
 * the purpose of this package is to contain all of the core Meteor and third party references
 * and to export the global namespace that the application will use (in core.js)
 * this is pretty much step one of the implementation phase...
 */

Package.describe({
   name: 'rise-lib', // use this if calling a meteor add
    summary: 'rise libraries',
    version: '0.0.1', //update if want meteor update to find this
    git: 'https://github.com/timbmccoy/Rise.git',
    documentation: 'README.md'

});

Package.onUse(function (api) {


    api.versionsFrom(['METEOR@1.0']);

    // these are required for the package to be considered runnable
    // includes the meteor core components and any 3rd party items we
    // will include in the app
    var coreMdgPackages = [
        'meteor-platform'
        , 'underscore'
        , 'autopublish' // to remove
        , 'insecure'    // to remove
        , 'check'
        , 'reactive-dict'
        , 'reactive-var'
        , 'accounts-base@1.2.0'
        , 'accounts-password@1.1.1'
        , 'http'
        , 'babel-compiler@5.6.15'
        , 'babel-runtime@0.1.3'
        , 'react@0.1.10'
        , 'geojson-utils@1.0.3'

    ];

    // globally accessible third party stuff we will use throughout the app
    // don't forget to pin the versions...
    // todo: kardia versions
    var thirdPartyPackages = [
        'kadira:flow-router@2.6.0'
        , 'kadira:react-layout@1.3.0'
        , 'tap:i18n@1.5.1'
    ];


    api.use(coreMdgPackages);
    api.use(thirdPartyPackages, ['client', 'server'], {unordered:true});// in this package, dependencies can load after the package code (i think :) )

    //todo: not sure about including 'web.cordova' in the architectures list; what will this do in practice.

    //allow these packages to be seen/used by any caller so that they only have to be declared once
    api.imply(coreMdgPackages);
    api.imply(thirdPartyPackages);

    // add the files of code that we have written
    // unlike how the *normal* non-componentized architecture
    // works out file ordering and architectural placement
    // we must explicitly tell the package
    // what files we are going to use, and where they need to run
    api.addFiles(
        ['lib/core.js']
        , ['client', 'server']
    );

    // make the rise object accessible outside of the package
    // must be the exact name of the var in code
    api.export([
        'Rise'
    ]);

});


// and for the testing pieces:
// tests will run is isolation (i.e. own db) from the referencing app's db
Package.onTest(function (api) {
    api.use('rise-lib', ['client','server']);
    api.use('sanjo:jasmine@0.18.0');

    api.addFiles('tests/client/client-tests.js', 'client');
    api.addFiles('test/server/server-test.js', 'server');
});

// also have
// Cordova.depends({}) // for plugins
// Npm.depends({}) // for any npm packages
