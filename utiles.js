const pgp = require('pg-promise')();

class DBStore {
    constructor(){
        this.dbSettings = {database: "karkicks2"}
        this.db = pgp(dbSettings)
    }
    //retrive data

    outTake(){
       return await db.query(`SELECT * FROM karkicks`)

    }
}

module.exports = DBStore