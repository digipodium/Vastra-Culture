const express = require('express');
const UserRouter = require('./routes/userRoutes');
const cors = require('cors');
const userAuth = require('./middleware/authMiddleware');

const app = express();
const port = 5000;

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use('/user' , UserRouter);

// route or endpoint
app.get('/', (req, res) => {
    res.send('respond from express');
});

// add
app.get('/add' , (req, res) => {
    res.send('response from add');
});

// getall
app.get('/getall' , userAuth, (req, res) => {
    res.send('response from getall');
});

// delete
app.get('/delete' , (req, res) => {
    res.send('response from delete');
});
// update
app.get('/update' ,(req , res) => {
    res.send('response from update');
});

app.listen(port, () => {
    console.log('server started');
});