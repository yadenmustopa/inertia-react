const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
.react()
    .sass('resources/sass/app.sass', 'public/css', [
        //
    ]);

    mix.browserSync('http://localhost:8000');

mix.
    webpackConfig
    ({
        stats: {
            children: true,
        }
    });
