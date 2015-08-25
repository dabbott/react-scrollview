gulp = require 'gulp'
gutil = require 'gulp-util'
webpack = require("webpack")
WebpackDevServer = require("webpack-dev-server")
componentWebpackConfig = require("./component.webpack.config.js")
componentWebpackMinConfig = require("./component.webpack.min.config.js")
siteWebpackConfig = require("./site.webpack.config.js")
siteWebpackProductionConfig = require("./site.webpack.production.config.js")
map = require 'map-stream'
touch = require 'touch'
_ = require 'underscore'

# Load plugins
$ = require('gulp-load-plugins')()

### Site ###

# CSS
gulp.task('site:css', ->
  gulp.src(['site/styles/*.sass', 'site/styles/*.scss'])
    .pipe($.compass({
      css: 'site/public/'
      sass: 'site/styles'
      image: 'site/styles/images'
      style: 'nested'
      comments: false
      bundle_exec: true
      time: true
      require: [
        'susy',
        'modular-scale',
        'normalize-scss',
        'sass-css-importer',
        'sassy-buttons',
        'breakpoint']
    }))
    .on('error', (err) ->
      gutil.log err
    )
    .pipe($.size())
    .pipe(gulp.dest('site/public/'))
    .pipe(map((a, cb) ->
      if siteDevServer.invalidate? then siteDevServer.invalidate()
      cb()
    ))
)

gulp.task('site:copy-assets', ->
  gulp.src('site/assets/**')
    .pipe(gulp.dest('site/public'))
    .pipe($.size())
)

# Some quick notes on using fontcustom.
# First you need to install some additional software
# as detailed at https://github.com/FontCustom/fontcustom#installation
# On MacOSX, this comment was the only way I got things to work: https://github.com/FontCustom/fontcustom/issues/209#issuecomment-48014939
# Otherwise I got a Python import error.
#
# Then once things are working, things here are setup so that the generated font
# is base64 encoded and included in the css file. For this to work, you
# need to edit the generated scss file at src/styles/_fontcustom.scss to remove
# its font-face imports.
# Font compilation
gulp.task('site:font', $.shell.task([
  'fontcustom compile'
]))

gulp.task('site:font-base-64', ->
  gulp.src('site/assets/fonts/*.ttf')
    .pipe($.rename('fontcustom.ttf'))
    .pipe($.cssfont64())
    .pipe($.rename('_fontcustom_embedded.scss'))
    .pipe(gulp.dest('site/styles/'))
)

gulp.task "site:webpack:build", ['site:css'], (callback) ->
  # Run webpack.
  webpack siteWebpackProductionConfig, (err, stats) ->
    throw new gutil.PluginError("webpack:build", err)  if err
    gutil.log "[webpack:build]", stats.toString(colors: true)
    callback()
    return


# Create a single instance of the compiler to allow caching.
siteDevCompiler = webpack(siteWebpackConfig)
gulp.task "site:webpack:build-dev", ['site:css'], (callback) ->

  # Run webpack.
  siteDevCompiler.run (err, stats) ->
    throw new gutil.PluginError("webpack:build-dev", err)  if err
    gutil.log "[webpack:build-dev]", stats.toString(colors: true)
    callback()
    return

  return

siteDevServer = {}
gulp.task "site:webpack-dev-server", ['site:css'], (callback) ->
  # Ensure there's a `./site/public/main.css` file that can be required.
  touch.sync('./site/public/main.css', time: new Date(0))

  # Start a webpack-dev-server.
  siteDevServer = new WebpackDevServer(webpack(siteWebpackConfig),
    contentBase: './site/public/'
    hot: true
    watchOptions:
        aggregateTimeout: 100
        poll: 300
    noInfo: true
  )
  siteDevServer.listen 8080, "0.0.0.0", (err) ->
    throw new gutil.PluginError("webpack-dev-server", err) if err
    gutil.log "[webpack-dev-server]", "http://localhost:8080"
    callback()

  return

gulp.task 'build:site', ['site:webpack:build', 'site:copy-assets']

gulp.task 'watch:site', ['site:css', 'site:copy-assets', 'site:webpack-dev-server'], ->
  gulp.watch(['site/styles/**'], ['site:css'])
  gulp.watch(['site/assets/**'], ['site:copy-assets'])

### Component ###

gulp.task "component:webpack:build-dev", (callback) ->
  webpack componentWebpackConfig, (err, stats) ->
    throw new gutil.PluginError("component:webpack:build-dev", err)  if err
    gutil.log "[component:webpack:build-dev]", stats.toString(colors: true)
    callback()

gulp.task "component:webpack:build-min", (callback) ->
  webpack componentWebpackMinConfig, (err, stats) ->
    throw new gutil.PluginError("component:webpack:build-min", err)  if err
    gutil.log "[component:webpack:build-min]", stats.toString(colors: true)
    callback()

gulp.task 'build:component', ['component:webpack:build-min', 'component:webpack:build-dev']

gulp.task 'default', ->
  gulp.start 'watch:site'
