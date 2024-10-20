const express =  require('express');
require('dotenv').config();
require('./Models/db');

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

