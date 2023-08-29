import express from "express";
import api from './routes/route.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = `mongodb://${username}:${password}@ac-x6pwbub-shard-00-00.fenkxo1.mongodb.net:27017,ac-x6pwbub-shard-00-01.fenkxo1.mongodb.net:27017,ac-x6pwbub-shard-00-02.fenkxo1.mongodb.net:27017/?ssl=true&replicaSet=atlas-lfqyjh-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose.connect(URL, () => {
    console.log('Database is connected successfully');
}, (e) => console.log(e))

const app = express()
app.use(cors());

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(api)
const PORT = process.env.SERVER_PORT || 9000

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})