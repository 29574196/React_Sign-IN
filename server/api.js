// This file will be used to route all the requests 
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
// web token dependency
const jwt = require('jsonwebtoken');

const { request } = require('express');

//const uri = "mongodb://localhost/GreenMeadows";
const uri = "mongodb+srv://tenantUsers:GreenMeadows@cluster0.wt9gm.mongodb.net/ReactCRUD?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}

const key = 'Me@d0w$2020';

mongoose.connect(uri, options, (err) => {
    if (err) {
        console.error("Database connection error : ", err);
    } else {
        console.log("connected to database");
    }
})

router.get('/', (req, res) => {
    res.send('API router');
})


/*************************************************************************** */

/***********************************************************************
 * Admin login , register , get , signout tenants
 ***********************************************************************/



module.exports = router;