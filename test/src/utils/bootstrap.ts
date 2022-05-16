import { startupDataMapObs } from './startupDataMapObs'
import { fileoperations } from './fileoperations'

import fs from 'fs';
const { merge } = require('mochawesome-merge')
export async function bootstrap(){
    startupDataMapObs.testdata= await fileoperations.gettestdata();
    startupDataMapObs.locatorsTestdata=await fileoperations.getLocatorsTestdata();

}
export async function bootstrapAll(){
    console.log(" boot all")
    if(fs.existsSync('./mocha-awesome')){
        fs.rmdirSync('./mocha-awesome', {recursive: true})
    }else{
fs.mkdirSync('./mocha-awesome');
    }

}

export async function teardownAll(){
    const options = {
        files: [
          'mocha-awesome/*report*.json',

        ],
      }
      console.log("Generating combined mocha file")
      merge(options).then(report=>{
          //console.log(report)
           
          // stringify JSON Object
          var jsonContent = JSON.stringify(report);

          fs.writeFile("./mocha-awesome/output.json", jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
         
            console.log("JSON file has been saved.");
        });
      })
}
