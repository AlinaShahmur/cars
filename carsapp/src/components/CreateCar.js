import { useState } from "react"
import { useDispatch } from "react-redux";
import Button from "./UI/Button";
import Input from "./UI/Input";
import classes from './CreateCar.module.css'
import Modal from "./UI/Modal";
import CloseIcon from "./Icons/CloseIcon";

function CreateCar(props) {
    const dispatch = useDispatch()
    const [car, setCar] = useState({model: '', year:'', color: ''})
    const submitHandler = (e) => {
        e.preventDefault();
        if (car.model !== '' && car.year !== '' && car.color !== '') {
            let obj = {_id:Date.now().toString(), model: car.model, year: car.year, color: car.color, status: 'added'}
            dispatch({type: 'ADD', payload: obj})
            setCar({model: '', year:'', color: ''})
            props.onClose();
        };
    }
    return (
            <Modal onClose = {props.onClose}>
                <div className = {classes['create-car']}>
                    <button className = {classes['close-button']} onClick = {props.onClose}>
                        <CloseIcon/>
                    </button>
                    <h2>Add a new Car</h2>
                    <form onSubmit = {submitHandler}>
                        <Input type = 'text' title = 'Model' value = {car.model} onChange = {(e) => setCar({...car, model: e.target.value})}/>
                        <Input type = 'number' title = 'Year' value = {car.year} onChange = {(e) => setCar({...car, year: +e.target.value})}/>
                        <Input type = 'text' title = 'Color' value = {car.color} onChange = {(e) => setCar({...car, color: e.target.value})}/>
                        <Button type = 'submit' title = 'Add' backColor = '#00cc99'>Add</Button>
                    </form>
                </div>
            </Modal>
    )
}

export default CreateCar