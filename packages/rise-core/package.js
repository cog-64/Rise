Package.describe({
  name: 'rise-core',
  version: '0.0.1',
  summary: 'application skeleton: layout pages and router config',
  git: 'https://github.com/timbmccoy/Rise.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.0.1");

  // should only reference the rise-lib,
  var packages = ['rise-lib@0.0.1'];
  api.use(packages);
  api.imply(packages);

  // common files
  api.addFiles('lib/router/config.js', ['client','server']);

  // server files
  api.addFiles('lib/server/publications.js', ['server']);

  // client files
  api.addFiles([
          'lib/client/stylesheets/styles.css'
          , 'lib/client/templates/layout.html'
          , 'lib/client/templates/not-found.html'
      ]
      , 'client');


});

Package.onTest(function(api) {
  api.use('rise-core', ['client','server']);
  api.use('sanjo:jasmine@0.18.0');

  api.addFiles('tests/client/client-tests.js', 'client');
  api.addFiles('test/server/server-test.js', 'server');
});
