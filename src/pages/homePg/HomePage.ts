const { I } = inject();
import { u } from 'playwright-actionbot/u'
import { loggers } from 'winston';
import { dataReader } from '../../utils/dataReader'
const logger =require('../../utils/logger')
//const faker=require('faker')
/* 
Description:
Author:
Date:
*/

export class HomePage {


    static async navigationUrl() {
        logger.info(" Navigatig to url: "+ dataReader.getTestData("url"))

        await u.amOnPage(dataReader.getTestData("url") as string)
       
        await I.getCurrentPage();
    }
    static async homepageVerify() {

        await u.checkIfVisible(dataReader.getLoacatorsData("home/homeLabel"))
        await u.seeInTitle("srini")
    }
    static async fillLocationinputField() {

        var locator: string = dataReader.getLoacatorsData("home/locationInputbox") || "";
        await I.executeScript(function (locator: string) {
            (<any>document).evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        }, locator);
        //await z.click(dataReader.getLoacatorsData("home/checkinDateInput") as string);
        //await z.fillField(dataReader.getLoacatorsData("home/locationInputbox") as string, dataReader.getTestData("homeLocationInputField") as string)
    }
    static async checkinDateFieldSelection() {
        try {
            var locator: string = dataReader.getLoacatorsData("home/checkinDateInput") || "";
            await I.executeScript(function (locator: string) {
                (<any>document).evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }, locator);

            //await z.click(dataReader.getLoacatorsData("home/checkinDateSelection") as string);
        } catch (error) {
            logger.error(" error \n ", error)
            console.log(error)
        }


    }
    static async checkoutDateFieldSelection() {
        try {
            var locator: string = dataReader.getLoacatorsData("home/checkinDateInput") || "";
            await I.executeScript(function (locator: string) {
                (<any>document).evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }, locator);

            //await z.click(dataReader.getLoacatorsData("home/checkinDateSelection") as string);
        } catch (error) {
            console.log(error)
        }


    }
    static async addGuests() {
        try {
            var locator: string = dataReader.getLoacatorsData("home/addGuests") || "";
            await I.executeScript(function (locator: string) {
                (<any>document).evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }, locator);

            //await z.click(dataReader.getLoacatorsData("home/checkinDateSelection") as string);
        } catch (error) {
            console.log(error)
        }


    }

    static async experienceLinkCheck() {
        try {
            /*var locator: string = dataReader.getLoacatorsData("home/addGuests") || "";
            await I.executeScript(function (locator: string) {
                (<any>document).evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }, locator); */

            await u.click(dataReader.getLoacatorsData("home/experienceLink") as string);
        } catch (error) {
            logger.error(" error \n ", error)
            console.log(error)
        }


    }
    static async onlineExperienceLinkCheck() {
        try {
            var locator: string = dataReader.getLoacatorsData("home/onlineExperienceLink") || "";
            await I.executeScript(function (locator: string) {
                (<any>document).evaluate(locator, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }, locator); 

            //await u.click(dataReader.getLoacatorsData("home/onlineExperienceLink") as string);
        } catch (error) {
            logger.error(" error \n ", error)
            console.log(error)
        }


    }

}