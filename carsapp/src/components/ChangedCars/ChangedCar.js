import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

function ChangedCar(props) {
    const [car, setCar] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        setCar(props.carData)       
    },[props.carData])
    const deleteHandler = () => {  
        dispatch({type: 'DELETE_FROM_STATE', payload: car._id})  
    }
    const restoreHandler = () => {
        dispatch({type:'CANCEL_DELETION', payload: car._id })
    }
    return (
        <div >
            <p>Model: {car.model}</p>
            <p>Year:  {car.year}</p>
            <p>Color:  {car.color}</p>
            {car.status === 'deleted' && <button onClick = {restoreHandler}>Restore</button>}
            {car.status === 'added' && <button onClick = {deleteHandler}>Delete</button>} 
        </div>
    )
}

export default ChangedCar