Package.describe({
  summary: "Super simple, fast and easy to use tweening engine which incorporates optimised Robert Penner's equations."
});

Package.on_use(function (api, where) {
  where = where || ['client'];
  if (api.export) {
    api.export('TWEEN');
  }
  root = this;
  api.add_files('lib/Tween.js', where);
  api.add_files('export-tween.js', where);
});

