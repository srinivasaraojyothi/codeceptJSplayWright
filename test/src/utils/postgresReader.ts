
const { Client } = require('pg')
export class postgresReader {

    static async postgressData() {


        const client = new Client({
            user: 'postgres',
            host: '172.17.0.3',
            database: 'nodedemo',
            password: 'postgres',
            port: 5432,
        })
        try {
            await client.connect();
            const now = await client.query("select * from information_schema.schemata;");
            await client.end();
            console.log(now)
            return now;;
        } catch (error) {
            console.log(error)
        }


    }
}

