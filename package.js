Package.describe({
  summary: "tween.js repackaged for Meteor",
  version: "0.14.0",
  git: "https://github.com/vedosity/meteor-tween.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  where = where || ['client', 'server'];
 
  api.add_files('lib/Tween.js', where);
  api.export('TWEEN', where);
})
