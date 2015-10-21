Package.describe({
  name: 'vsivsi:orion-file-collection',
  summary: 'MongoDB gridFS support for orionjs:filesystem',
  version: '0.2.0',
  git: 'https://github.com/vsivsi/orion-file-collection'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:core@1.0.0',
    'orionjs:filesystem@1.0.1',
    'vsivsi:file-collection@1.1.1'
    ]);

  api.addFiles([
    'index.js'
    ]);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:filesystem');
});
