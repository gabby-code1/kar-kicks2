const express = require('express')
const pgp = require('pg-promise')();

const dbSettings = {database: "karkicks2"}
const db = pgp(dbSettings)

const DBStore = require('./utiles/dbUtiles')

const app = express()
const PORT = 2700

app.get('/', async (req, res) => {

    const results = await db.query(`SELECT * FROM karkicks`)
    res.send({results})
});



console.log(db)


app.listen(PORT, ()=>{
    console.log(`Connected to devnet on port ${PORT}....`)
})