const Car = require('./car')

exports.getAllCars = () => {
    return new Promise((resolve, reject) => {
        Car.find({},(err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

exports.deleteCar = (id) => {
    return new Promise((resolve, reject) => {
        Car.findByIdAndDelete(id,(err) => {
            if (err) {
                reject(err)
            } else {
                resolve('deleted')
            }
        })
    })
}

exports.updateCar = (id, obj) => {
    return new Promise((resolve, reject) => {
        Car.findByIdAndUpdate(id, {
            model: obj.model,
            year: obj.year,
            color: obj.color
        },(err) => {
            if (err) {
                reject(err)
            } else {
                resolve('updated')
            }
        })
    })
}

exports.addCar = (obj) => {
    return new Promise((resolve, reject) => {
        let car = new Car({
            model: obj.model,
            year: obj.year,
            color: obj.color
        })
        car.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve('created')
            }
        })
    })
}