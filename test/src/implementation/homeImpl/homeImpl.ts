const { I }=inject();

import { HomePage } from "../../pages/homePg/HomePage";

/* 
Description:
Author:
Date:
*/

Given("user naivigates to the airBnB app",async function(){
    await HomePage.navigationUrl()
});
Then("user checks the home page label",async function(){
    await HomePage.homepageVerify()
});
When("enters data in location",async function(){
    await HomePage.fillLocationinputField()
});
When("user checks checkin",async function(){
    await HomePage.checkinDateFieldSelection()
});
When("enters data for checkout",async function(){
    await HomePage.checkoutDateFieldSelection();
});
When("add guests input check",async function(){
    await HomePage.addGuests();
});
When("user checks experience link",async function(){
    await HomePage.experienceLinkCheck()
});
When("user checks online experience link",async function(){
    await HomePage.onlineExperienceLinkCheck()
});