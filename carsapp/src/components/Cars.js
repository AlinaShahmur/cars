import { useEffect, useState } from "react";
import {  useSelector } from "react-redux"
import Car from "./Car"
import classes from './Cars.module.css'
import Search from "./Search";



function Cars() {

    const storeData = useSelector(state => state)
    const [cars, setCars] = useState([]);
    useEffect(() => {
        setCars(storeData.cars)
    },[storeData.cars])

    const getFilteredData = (data) => {
        setCars(data)
    }
    return (
        <div className = {classes.cars}>
            <Search  onGetFilteredData = {getFilteredData}/> 
            <div className = {classes['cars__items']}>
                {cars.length > 0 ? cars.filter(car => car.status !== "deleted" && car.status !== 'added').map(car => <Car key = {car._id}  carData = {car}/>) : <p>No cars found</p>}
            </div>          
        </div>      
    )
}

export default Cars