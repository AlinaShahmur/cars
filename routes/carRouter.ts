import { Router } from 'express';
import { createCar, deleteCar, getAllCars, updateCar } from '../handlers/carsHandler'
const app = Router()


app.get('/', getAllCars);
app.post('/', createCar);
app.put('/:carId', updateCar);
app.delete('/:carId', deleteCar);

export default app