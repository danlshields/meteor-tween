Package.describe({
  summary: "Super simple, fast and easy to use tweening engine which incorporates optimised Robert Penner's equations."
});

Package.on_use(function (api) {
  api.add_files(['lib/Tween.js'], ['client']);
  api.export('TWEEN');
});

