const express = require('express');
const app = express();
const path = require("path");
const routes= require("./routes/index");
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');

const user=require('./models/user');
const album=require('./models/album');

const  dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT
const password=process.env.PASSWORD

// const url=`mongodb+srv://SerenaCascia:${password}@curso-intro.jw2pjxq.mongodb.net/?retryWrites=true&w=majority`;
const url=`mongodb+srv://SerenaCascia:39668145@curso-intro.jw2pjxq.mongodb.net/?retryWrites=true&w=majority`;


app.use(express.json());
app.use(cookieParser())

app.use(express.static(path.join(__dirname, "public")));
app.use("/health", (req, res) => res.sendStatus(200));
app.use('/', routes);

const connectToMongo= async() =>{

    try{
      await mongoose.connect(url);
      app.listen(3000, () => {
        console.log('servidor escuchando y DB conectado.')
      })
    }catch(error){
      console.log("error");
    }
}

connectToMongo();
