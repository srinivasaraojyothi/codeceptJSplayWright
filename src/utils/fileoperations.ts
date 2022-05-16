import fs from 'fs';
export class fileoperations {
    static async gettestdata(): Promise<Map<string, string>> {


        let testDataMap: Map<string, string> = new Map();
        //var location: string = path.resolve("./src") + "/testdata/" + process.env.SETUP + ".json"

        let testDataFilePath = `./src/testdata/${process.env.SETUP}.json`;

        if (!fs.existsSync(testDataFilePath)) {
            //logger.info(`Test data json file '${testDataFilePath}' not found`);
            throw new Error(`Test data json file '${testDataFilePath}' not found`);
        }
        else {
            let jsonObject = JSON.parse(fs.readFileSync(testDataFilePath, "utf-8"));
            //jsonObject = jsonObject[`${process.env.SETUP}_${process.env.TENANT}` as string];

            for (const [key, value] of Object.entries(jsonObject)) {
                if (key !== "CREDENTIALS") {
                    testDataMap.set(key, value as string);
                }
            }
        }

        //logger.info(`Data map size --> ${testDataMap.size}`);

        return testDataMap;
    }

    static async getLocatorsTestdata(): Promise<Map<string, string>> {


        let testDataMap: Map<string, string> = new Map();
        //var location: string = path.resolve("./src") + "/testdata/" + process.env.SETUP + ".json"

        let testDataFilePath = `./src/locatorsObjRepo/uiElements.json`;

        if (!fs.existsSync(testDataFilePath)) {
            //logger.info(`Test data json file '${testDataFilePath}' not found`);
            throw new Error(`Test data json file '${testDataFilePath}' not found`);
        }
        else {
            let jsonObject = JSON.parse(fs.readFileSync(testDataFilePath, "utf-8"));
            //jsonObject = jsonObject[`${process.env.SETUP}_${process.env.TENANT}` as string];

            for (const [key, value] of Object.entries(jsonObject)) {
                if (key !== "CREDENTIALS") {
                    testDataMap.set(key, value as string);
                }
            }
        }

        //logger.info(`Data map size --> ${testDataMap.size}`);
       // console.log(testDataMap)
        return testDataMap;
    }
}