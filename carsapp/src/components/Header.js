import Button from "./UI/Button"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import './Header.css'
function Header(props) {
    const storeData = useSelector(state => state)
    const [isHighlighted, setIsHiglighted] = useState(false)

    let counterClasses = isHighlighted ? "counter bump" : "counter"
    return (
        <div  className = "header">
            
            <h1>Cars Management</h1> 
            <div className = "buttons-panel">
                <Button onClick = {props.clickCreateCarHandler}  title = "Create Car" type = 'button' backColor = '#b3d9ff'/>           
    
            </div>
           
        </div>

    )
}

export default Header