Package.describe({
  summary: "tween.js repackaged for Meteor"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  
  api.add_files('lib/tween.js/src/Tween.js', where);
})