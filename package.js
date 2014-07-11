Package.describe({
    summary: 'Ladda Bootstrap'
});

Package.on_use(function(api) {
    api.use('bootstrap-3', 'client');

    api.add_files('lib/ladda-themeless.css', 'client');
    api.add_files('lib/spin.js', 'client');
    api.add_files('lib/ladda.js', 'client');
});

