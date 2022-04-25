import Car from '../db/models/car';


export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.send(cars)
    } catch (err) {
        throw new Error(err);
    }
}

export const deleteCar = async (req, res) => {
    try {
        const {carId} = req.params;
        await Car.findByIdAndDelete(carId);
        res.send('deleted')
    } catch (err) {
        throw new Error(err);
    }
}

export const updateCar = async (req, res) => {
    try {
        const {carId} = req.params;
        const car = req.body
        await Car.findByIdAndUpdate(carId, car);
        res.send('Updated')
    } catch (err) {
        throw new Error(err);
    }
}

export const createCar = async (req,res) => {
    try {
        const car = req.body;
        const carToCreate = new Car({
            model: car.model,
            year: car.year,
            color: car.color
        })
        await carToCreate.save();
        res.send('Created')
    } catch (err) {
        throw new Error(err);
    }
}