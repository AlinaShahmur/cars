import { useSelector } from "react-redux"
import dataFromServer from "../../utils/dataFromServer"
import classes from './ChangedCars.module.css'
import Button from "../UI/Button"
import CloseIcon from "../Icons/CloseIcon"
import ChangedGroup from "./ChangedGroup"


function ChangedCars(props) {
    const storeData = useSelector(state => state)
    let changedItems = storeData.cars.filter(car => car.status !== 'unchanged')
    const sendChangesHandler = () => {
        changedItems.forEach(item => {
            switch(item.status) {
                case 'deleted':
                    dataFromServer.deleteItem('http://localhost:8000/api/cars',item._id).then(data => data)
                    break
                case 'added':
                    dataFromServer.addItem('http://localhost:8000/api/cars',item).then(data => data)
                    break
                case 'updated':
                    dataFromServer.updateItem('http://localhost:8000/api/cars',item._id,item).then(data => data)
                    break
                default:
                    alert('there is no data to change')
            }
        })
    }
    let addedCars = storeData.cars.filter(car => car.status === 'added')
    let deletedCars = storeData.cars.filter(car => car.status === 'deleted')
    let updatedCars = storeData.cars.filter(car => car.status === 'updated')
    let styles = {transform: props.isVisible ? 'scaleX(1)' : 'scaleX(0)'}
    return (
        <div  style = {styles} className = {classes['mutated-cars']}>
            <button className = {classes['close-button']} onClick = {() => props.closeButtonHandler(false)}>
                <CloseIcon/>
            </button>
            <h2>Cars to be changed</h2>
            <p>Click on 'send changes' will apply these changes</p>
            <ChangedGroup label = 'Added' changedCars = {addedCars} length = {addedCars.length}/>
            <ChangedGroup label = 'Deleted' changedCars = {deletedCars} length = {deletedCars.length}/>
            <ChangedGroup label = 'Updated' changedCars = {updatedCars} length = {updatedCars.length}/>
            <Button type = 'button' disabled = {changedItems.length === 0} title = 'Send Changes' color = '#fff' backColor = '#8c8c8c' onClick = {sendChangesHandler} />     
        </div>
    )
}

export default ChangedCars