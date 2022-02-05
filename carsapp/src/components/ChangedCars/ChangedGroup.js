import { useEffect, useState } from "react"
import ArrowDownIcon from "../Icons/ArrowDownIcon"
import ArrowUpIcon from "../Icons/ArrowUpIcon"
import ChangedCar from "./ChangedCar"
import './ChangedGroup.css'

function getContent(arr) {
    let content = arr.length > 0 ? (<div>
     {arr.map(car => <ChangedCar key = {car._id} carData = {car}/>)}                                  
         </div>) : 
     <p>There are no items</p>
     return content
 }

function ChangedGroup(props) {
    const [isVisible, setIsVisible] = useState(false)
    const [counterIsHighlighted, setCounterIsHighlighted] = useState(false)
    useEffect(() => {
        if (props.length === 0) {
            return; 
        }
        setCounterIsHighlighted(true)
        const timer = setTimeout(() => {
            setCounterIsHighlighted(false);
        }, 700);   
        return () => {
            clearTimeout(timer);
        };
    },[props.length])
    let lengthClasses = counterIsHighlighted ? 'bump' : ''
    let content = getContent(props.changedCars)
    const contentClasses =  isVisible ? 'changed-cars' : 'changed-cars invisible'
    return (
        <div>
            <div className = 'label' onClick = {() => setIsVisible(!isVisible)}>
                <h3>{props.label} Items <span className = {lengthClasses}>({props.length})</span></h3>
                <button >
                    {!isVisible &&  <ArrowDownIcon/>}
                   {isVisible && <ArrowUpIcon/>} 
                </button>    
            </div>
            <div className = {contentClasses}>
                {content}
            </div>

        </div>
    )
}

export default ChangedGroup