import fs from 'fs';
import path from 'path';
import {startupDataMapObs} from './startupDataMapObs'
export class dataReader {

    static  getTestData(key:string) {

        let mapValue=startupDataMapObs.testdata.get(key);
       if( typeof mapValue == 'undefined'){

       }
       else{
           return mapValue;
       }
    }

    static  getLoacatorsData(key:string) {

        let mapValue=startupDataMapObs.locatorsTestdata.get(key);
        console.log(startupDataMapObs.locatorsTestdata.get(key),'----',key)
       if( typeof mapValue == 'undefined'){

       }
       else{
      
           return mapValue;
       }
    }
}