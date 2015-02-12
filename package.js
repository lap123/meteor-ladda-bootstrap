Package.describe({
    summary: 'Ladda Bootstrap',
    version: "0.1.0",
    name: "lap123:ladda-bootstrap",
    git: "https://github.com/lap123/meteor-ladda-bootstrap.git"
});

Package.onUse(function(api) {
    // api.use('mizzao:bootstrap-3', 'client');

    api.addFiles('lib/ladda-themeless.css', 'client');
    api.addFiles('lib/spin.js', 'client');
    api.addFiles('lib/ladda.js', 'client');
});

