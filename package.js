Package.describe({
  summary: "Super simple, fast and easy to use tweening engine which incorporates optimised Robert Penner's equations."
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];

  api.add_files('lib/tween.js/src/Tween.js', where);
  api.add_files('export-tween.js', where);
})
