const express = require('express');
const app = express();
const dotenv = require('dotenv');

const databaseConnect = require('./config/database');

const authRouter = require('./routes/authRoute');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const messengerRoute = require('./routes/messengerRoute');

dotenv.config({
    path : 'backend/config/config.env'
})


app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api/messenger', authRouter);

app.use('/api/messenger',messengerRoute);



const PORT = process.env.PORT || 8000;

app.get('/',(req,res) => {
    res.send('This is from backend')
})


databaseConnect();

app.listen(PORT, ()=>{
    console.log('my server is running on ' + PORT);
})