// Karma configuration
// Generated on Wed Mar 30 2016 20:41:53 GMT0100 (WEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    client: {
        mocha: {
            ui: 'bdd'
        }
    },

    // list of files / patterns to load in the browser
    files: [
      'js/csv.js',
      'test/csv_test.js',
      'vendor/chai.js',
      'vendor/mocha.css',
      'vendor/mocha.js',
      'vendor/sinon-1.17.3.js',
      'vendor/blanket.min.js',
      'vendor/mocha-blanket.js',
    ],

    // list of files to exclude
    exclude: [
        'gulpfile.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/testk.html': ['html2js'],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // Se puede añadir a la lista 'Chrome', 'Safari' si no lo vamos a ejecutar en Travis
    browsers: ['Firefox', 'PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
