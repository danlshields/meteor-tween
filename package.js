Package.describe({
  summary: "tween.js repackaged for Meteor"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
 
  api.add_files('lib/Tween.js', where);
  api.export('TWEEN', where);
})
