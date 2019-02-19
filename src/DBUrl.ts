import * as dbconfig from '../db.config.json';

export class DBUrl {
    static getUrl(url): string {
        return `mongodb://${dbconfig.dbuser}:${dbconfig.dbpassword}@${url}`
    }    
}