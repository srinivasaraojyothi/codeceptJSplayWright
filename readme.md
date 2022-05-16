# ACTIONBOT
Is an End to End BDD supported Test Automation framework powered by CodeceptJS and runs on nodeJS engine. Developed with typescript on playwright native API. This Tool collects the data and perform tasks based on data collected. Hence called ActionBot.
# Why ActionBot?

After careful observation of the challenges faced by the test automation teams while developing test automtion scrips, we designed actionbot as one stop solution to overcome those challenges and continue to do scripting.

* Framework is divided into 3 layers
   * Application independent layer -wrapper as node_module package
   * Application specific layer - features,pages.pageobjects,stepdef implementations.
   * Quasi Layer - Data Readers, Locatr Readers, Log recorders etc..
#### Challenges faced by the automation teams
* Common class/wrapper maintenance
* Locators Data maintenance
* Test Data maintenance
* Version control
* Need of environment specific artifacts
* Lack of knowledge on tool/script for new team members.
#### How ACTIONBOT overcomes these challnges?
* Externalized the wrapper class so that it can installed as npm package.It is called as application independent layer. With this approach version controlling of wrapper is guaranteed and allows the tester to choose the version that suit his needs.
* Locators are externalized within the Appliation specific layer as json files. This approach refrains the tester from touching the source code for any change at the locator level. Just a change in the json file should allow to proceed with automation execution. No compilation is required.
* Again like locators, test data as well externalized within the application specific layer as json files. This approach will give control to the tester to update the test data/ can provide clean data for executions.
* With externalized wrapper class, changes to the code will be incremental and the versioning is guaranteed. Tester can install the stablized version of wrapper for his coding.
* Environment specic data selection will done thru config file and execution command
* Wrapper class is designed with selfexplanatory method names with actors like I, you and me. This makes commands looks like general english sentences enough to be understand by junior/manual engineers. New team members and Manual tester can start automtion with minimal training.
ex: To navigae to any url after browser opens, command would be I.amonPage().

# Best Approches followed 

* Externalized wrapper
* Externalized data and Locators
* Customised folder structure.
* Logger implemenation
* Different flavoured Reports generation
  * Mochawesome
  * Mocha-Multi
  * Allure
* API access from the main tool for specic needs.
* Platform Independent.Suports following test platforms.
  * Docker with selenoid (Webdriver)
  * Moon 
  * Cloud infra like browserstack, saucelabs etc..
  * Selenium Grid-4
# Get Start
* Prerequistes:
  * NodeJS should be installed on the system
  * VS Code or powershell cmd should be available on the system
* Follow below steps to setup the framework
   * Open cms and Clone the code from below link
     * git clone _repo url_
     * cd _cloned folder_
   * From cmd do following
     * npm install
  * Provide the xpaths of your elements in 'uiElements.json' file under locatorsrepo folder in the following format

  `"home/homeLabel": "//a[@aria-label='Airbnb Homepage']"`

  * Repeat the same for all your xpath elements.

   * Create a .feature file under _features_ folder 
     * Ex: menu.feature , copy and paste below scenario to the menu.feature
      
        `Feature: amazon `

        `@L1`

        `Scenario: airbn navigation`

        `Given user navigates to amazon`

        `When user checks the home page label`

   * Create a folder menu under pages folder
     * create menu.ts file under menu folder and keep the following code
    
    
` const { I } = inject();`

`import { u } from 'playwright-actionbot/u'`

`import { loggers } from 'winston';`

`import { dataReader } from '../../utils/dataReader'`

`const logger =require('../../utils/logger')`

export class HomePage {

    static async navigationUrl() {
        logger.info(" Navigatig to url: "+ dataReader.getTestData("url"))

        await u.amOnPage(dataReader.getTestData("url") as string)
       
        await I.getCurrentPage();
    }
    static async homepageVerify() {

        await u.checkIfVisible(dataReader.getLoacatorsData("home/homeLabel"))
        
    }
    }

   * write setp definitions under implementation folder
     * create menu.ts file
     * copy the below code


`Given("user naivigates to the amazon",async function(){
    await HomePage.navigationUrl()
});`

`Then("user checks the home page label",async function(){
    await HomePage.homepageVerify()
});`

  * Hit th following command from cmd/VS code terminal
  $env:SETUP='production';npm test
  
  * Execution should start and after end of the execution following root folder should be created for reporting data.
    * allure-report
    * mocha-awesome
  * Open the respective html reports and view the execution. For allure to open , install nom i http-server, a portable web server, and open the https://localhost:8080 and navigate to the report folder allure-report. it willl open the allure report in html format.  
  
  *Note*: Refer the 'test' folder for better understanding of framework. You can execute the tests under 'test' folder by navigating the folder and hit the command -  $env:SETUP='production';npm test;
  run the command after changing 'codecept.conf.js' to 'codecept.conf_test.js' under scripts object in package.json

# Features
  * config controlled timeouts
  * Retry Failed Step Plugin
  * Retry scenario at framework/code level. Paste the below code in any of the implementation file.
  
 
  
  `Before((test) => {
  // perform your code
  test.retries(3); // retry test 3 times
});`
  * winston logger
  * Simultaneous generation of different falavours of reports
     * allure
     * mochawesome
     * mocha-multi
  * Rule based Lint configurable 
  
# Folder Structure 

* dist  : compiled source code destination folder
* src   :source code main flder
  * features : BDD files, can have subfolders of individul pages
     * pagespecific folders
  * implementations : stepdef folder, can have subfolders of individual pages.
     * page specific folders
  * pages : page objects folder, can have subfolders of individual pages.
     * page specific folders
  * locatorsrepo : locators folder. Recommends single json file.
  * testdata : test data folder. can have env specific test data files in json format.


# Execution Flow:

.feature -->(stepdef.ts)-->(pageObjet.ts)-->playwright Driver-->real browser.
# Code Examples
  * Refer test folder.Explained in previou sections how to run sample code.
# wdio official website
 * https://webdriver.io/
# codeceptJS official website
 * https://codecept.io/



           


  

