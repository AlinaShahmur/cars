import express from 'express';
import cors from 'cors';
import carRouter  from './routes/carRouter';

const app = express();
const path = require('path');
require('dotenv').config();
require('./db/db')
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use('/api/cars', carRouter)


if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'carsapp', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'carsapp', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})