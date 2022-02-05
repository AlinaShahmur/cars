const express = require('express');
const app = express();
const cors = require('cors');
const carRouter = require('./routers/carRouter')
const PORT = process.env.PORT || 8000

require('./db/db')
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
    console.log('listening on 8000')
})