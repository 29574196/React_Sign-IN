const express = require('express');
const  cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
const  PORT = process.env.PORT || 5000;

const api = require('./api');
const userRouter = require('./routes/user');


// cors to allow access on different ports
app.use(cors());
//to allow our app to recieve json data
app.use(bodyParser.json());

app.use('/api', api);
app.use('/user',userRouter);

app.get('/', (req, res) => {
    res.send('React CRUD');
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});