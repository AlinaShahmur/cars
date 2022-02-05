import Button from "./UI/Button"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import './Header.css'
function Header(props) {
    const storeData = useSelector(state => state)
    const [isHighlighted, setIsHiglighted] = useState(false)
    let changedCars = storeData.cars.filter(car => car.status !== 'unchanged')
    let changedCarLength = changedCars.length

    useEffect(() => {
        if (changedCarLength === 0) {
            console.log(changedCarLength)
            return;
        }
        setIsHiglighted(true)
        let timer = setTimeout(() => {
            setIsHiglighted(false)
        },300)
        return () => {
            clearTimeout(timer)
        }
    },[changedCarLength])
    let counterClasses = isHighlighted ? "counter bump" : "counter"
    return (
        <div  className = "header">
            
            <h1>Cars Management</h1> 
            <div className = "buttons-panel">
                <Button onClick = {props.clickCreateCarHandler}  title = "Create Car" type = 'button' backColor = '#b3d9ff'/>           
                <button onClick = {props.onToggleChangedCars} className = 'btn-changed-cars'>Changed Cars<span className = {counterClasses}>({changedCarLength})</span></button>
            </div>
           
        </div>

    )
}

export default Header