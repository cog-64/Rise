Package.describe({
  name: 'rise-notifications',
  version: '0.0.1',
  summary: 'representation of notifications passed in the action',
  git: 'https://github.com/cog-64/Rise.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.0.1");

  // reference the rise-core and anything that is strictly limited to this package
  var packages = ['rise-core@0.0.1'];
  api.use(packages);

  // common files
  //api.addFiles([
  //  'lib/collections.js'
  //  , 'lib/routes.js'
  //  , 'lib/schema.js'
  //], ['client', 'server']);
  //

  //// server files
  //api.addFiles([
  //  'lib/server/seeds.js'
  //]);

  // client only files
  //api.addFiles([
  //  'lib/client/seeds.js'
  //]);

  // add the language files
  var languages = ["en", "fr"];
  var languagesPaths = languages.map(function (language) {
    return "i18n/"+language+".i18n.json";
  });
  api.addFiles(languagesPaths, ["client", "server"]);


});


Package.onTest(function(api) {
  api.use('rise-notifications', ['client','server']);
  api.use('sanjo:jasmine@0.18.0');

  api.addFiles('tests/client/client-tests.js', 'client');
  api.addFiles('test/server/server-test.js', 'server');
});