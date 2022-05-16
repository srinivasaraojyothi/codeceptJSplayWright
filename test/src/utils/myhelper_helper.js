const Helper = require('@codeceptjs/helper');

class MyHelper extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }
  async getCurrentPage(){
    const I=this;
    const browserClient  = await this.helpers['Playwright'].browser;
//await browserClient.pages(); // List of pages in the browser
//console.log(await browser.pages(),'----url-----');
// get current page
console.log(await browserClient.isConnected(),'----advanced usage--');

}
  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = MyHelper;
