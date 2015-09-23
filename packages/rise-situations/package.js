Package.describe({
  name: 'rise-situations',
  version: '0.0.1',
  summary: 'situations in the action',
  git: 'https://github.com/timbmccoy/Rise.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  // reference the rise-core and anything that is strictly limited to this package
  var packages = ['rise-core@0.0.1'];
  api.use(packages);

  // common files
  api.addFiles([
      'lib/collections.js'
      , 'lib/routes.js'
      , 'lib/schema.js'
  ], ['client', 'server']);

  // server files
  api.addFiles([
    'lib/server/seeds.js'
      ]);

  // client only files
  //api.addFiles([
  //  'lib/client/seeds.js'
  //]);


  api.export([
      'Situations'
  ]);

});

Package.onTest(function(api) {
  api.use('rise-situations', ['client','server']);
  api.use('sanjo:jasmine@0.18.0');

  api.addFiles('tests/client/client-tests.js', 'client');
  api.addFiles('test/server/server-test.js', 'server');
});
