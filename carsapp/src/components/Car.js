import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Button from "./UI/Button"
import Card from "./UI/Card"
import classes from './Car.module.css'
import Input from "./UI/Input"

function Car(props) {
    const dispatch = useDispatch()
    const [car, setCar] = useState({_id: '', model: '', color: '', year: '', status:''})
    useEffect(() => {
        setCar(props.carData)
    },[])
    const deleteHandler = () => {
       dispatch({type: 'DELETE', payload: car._id})
    }
    const updateHandler = () => {
       let obj = {_id: car._id, model: car.model, color: car.color, year: car.year, status: 'updated'}
       dispatch({type: 'UPDATE', payload: obj})
    }
    return (
        <Card>
            <div className = {classes.car}>
                    <Input type = 'text' title = 'Model' value = {car.model} onChange = {(e) => setCar({...car, model: e.target.value})}/>
                    <Input type = 'number' title = 'Year' value = {car.year} onChange = {(e) => setCar({...car, year: +e.target.value})}/>    
                    <Input type = 'text' title = 'Color' value = {car.color} onChange = {(e) => setCar({...car, color: e.target.value})}/>
                    <Button type = 'button' title = 'Delete' onClick = {deleteHandler} backColor = '#ff6666'/>
                    <Button type = 'button' title = 'Update' onClick = {updateHandler} backColor = '#3399ff'/>
            </div>
        </Card>


    )
}

export default Car