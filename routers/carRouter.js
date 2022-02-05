const express = require('express');
const router = express.Router();
const CarBL = require('../db/models/carBL')

router.get('/', (req,res) => {
    CarBL.getAllCars().then(data => res.json(data))
})

router.post('/', (req,res) => {
    let car = req.body
    CarBL.addCar(car).then(data => {
        res.json(data)
    })
})
router.put('/:id', (req,res) => {
    let id = req.params.id
    let car = req.body
    CarBL.updateCar(id, car).then(data => {
        res.json(data)
    })
})

router.delete('/:id', (req,res) => {
    let id = req.params.id
    CarBL.deleteCar(id).then(data => {
        res.json(data)
    })
})

module.exports = router