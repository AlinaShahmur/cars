import {Schema, model} from 'mongoose'
import {CarDoc} from '../../types/index'

const carSchema = new Schema<CarDoc>({
    model: String,
    year: Number,
    color: String
})

export default model('cars', carSchema)