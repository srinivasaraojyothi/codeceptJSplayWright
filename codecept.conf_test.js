exports.config = {
  //tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:4445/wd/hub',
      show: true,
      chromium: {
        browserWSEndpoint: 'ws://127.0.0.1:7900/websockify/browser/387adf4c-243f-4051-a181-46798f4a46f4'
      }
    },
    MyHelper: {
      require: './src/utils/myhelper_helper.js'
    },
    Mochawesome: {
      uniqueScreenshotNames: "true"
  }
    
  },
  
  include: {
    I: './steps_file.js'
  },
  bootstrap:require("./dist/test/src/utils/bootstrap.js").bootstrap,
teardownAll:require("./dist/test/src/utils/bootstrap.js").teardownAll,
  mocha: {
    uniqueScreenshotNames: "true"
  },
  name: 'frameWorkPlayWright',

  plugins: {
    /*wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }, */
    allure: {

      enabled: true
    },
    screenshotOnFail: {
      enabled: true,
      uniqueScreenshotNames:true,
      fullPageScreenshots:true
    },
   /* coverage: {
      enabled: true
    } */
  },

  /*"multiple": {
    "parallel": {
      // Splits tests into 2 chunks
      "chunks": 2
    }
  }, */
  require: ["ts-node/register", "should","mochawesome/register"],
  /*mocha: {
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
        options: {
          verbose: true,
          steps: true,
        }
      },
      mochawesome: {
        stdout: "./mochaReport/console.log",
        options: {
          reportDir: "./mochaReport",
          reportFilename: "report"
        }
      },
      "mocha-junit-reporter": {
        stdout: "./mochaReport/console.log",
        options: {
          mochaFile: "./mochaReport/result.xml",
          attachments: true //add screenshot for a failed test
        }
      }
    }
  }, */
  mocha: {
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "mocha-awesome",
        overwrite:false,
        reportFilename: "[datetime]_report",
    timestamp: "longDate"
    }
  },

  gherkin: {
    features: "./test/src/features/**/*.feature",
    steps: 
      "./dist/test/src/implementation/**/*.js"
    
  }
}