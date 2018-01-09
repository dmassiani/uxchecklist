module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"],
      vendor: [
        "./garlic.js",
        "./jquery-labelauty.js",
        "./jquery.magnific-popup.min.js",
        "./realtime.js"
      ]
    }
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'docs'
    }
  },

  production: {
    rev: false
  }
}
