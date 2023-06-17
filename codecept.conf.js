const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.google.com',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha:{
    reporterOptions: {
      mochaFile : "output/result.xml",
      reportDir: "output"
  }
},
  name: 'codeceptjs with allure report',
  plugins: {
    retryFailedStep:{
      enabled: true
    },
    screenshotOnFail:{
      enabled: true
    },
    stepByStepReport:{
      enabled: true,
      deleteSuccessful: false,
      screenshotsForAllureReport: true,
    },
    allure: {
      enabled: true,
      
     
    }

  },
}