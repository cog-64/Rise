Package.describe({
  name: 'rise-i18n',
  version: '0.0.1',
  summary: 'language elements of the user interface.  Lifted verbatim from Sacha Greifs TelescopeJS',
  git: 'https://github.com/cog-64/Rise.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use(['rise-lib']);

  api.use(["session"], "client");

  api.addFiles(['i18n.js'], ['client', 'server']);

  api.export([
    'i18n'
  ]);
});