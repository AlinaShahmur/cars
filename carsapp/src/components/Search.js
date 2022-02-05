import React, { useCallback, useRef, useState } from "react"
import { useSelector } from "react-redux"
import ArrowDownIcon from "./Icons/ArrowDownIcon"
import ArrowUpIcon from "./Icons/ArrowUpIcon"
import DiscardIcon from "./Icons/DiscardIcon"
import './Search.css'
import Button from "./UI/Button"
import Select from "./UI/Select"

function Search(props) {
    const [isSearchOpen, setSearchOpen] = useState()
    const [choosenModels, setChoosenModels] = useState([])
    const [choosenColors, setChoosenColors] = useState([])
    const storeData = useSelector(state => state)
    const modelsRef = useRef();
    const colorsRef = useRef()
    const colors = useCallback(storeData.cars.reduce((prevValue, currValue) => {
        if (!prevValue.includes(currValue.color)) {
            prevValue.push(currValue.color)
        }
        return prevValue
    },[]),[storeData]) 
    const models = useCallback(storeData.cars.reduce((pValue, cValue) => {
        if (!pValue.includes(cValue.model)) {
            pValue.push(cValue.model)
        }
        return pValue
    },[]),[storeData]) 
    const searchHandler = () => {
        let filteredArray = []
        filteredArray = storeData.cars.filter(car => {
            return (choosenModels.length === 0 ? true :  choosenModels.includes(car.model)) && (choosenColors.length === 0 ? true: choosenColors.includes(car.color))
        })
        props.onGetFilteredData(filteredArray)
    }   
    const searchOpenHandler = () => {
        setSearchOpen(!isSearchOpen)
        props.onGetFilteredData([...storeData.cars])
    }
    const removeCriteriasHandler = () => {
        props.onGetFilteredData([...storeData.cars])
        modelsRef.current.removeCriterias();
        colorsRef.current.removeCriterias()
    }
    const getChoosedModels = useCallback((data) => {
        let arr = []
        for (let key in data) {
            if (data[key] === true) {
                arr.push(key)
            }
        }
        setChoosenModels(arr)
    },[])   
     const getChoosedColors = useCallback((data) => {
        let arr = []
        for (let key in data) {
            if (data[key] === true) {
                arr.push(key)
            }
        }
        setChoosenColors(arr)
    },[])
    let searchPanelClasses = isSearchOpen ? "panel" : "panel invisible"
    return (
        <div className = "search">
            <div className = "title">
                <h3>Filter</h3>
                <button onClick = {searchOpenHandler}>
                    {!isSearchOpen &&  <ArrowDownIcon/>}
                   {isSearchOpen && <ArrowUpIcon/>} 
                </button>               
            </div>           
             <div className = {searchPanelClasses}> 
                                <Select items = {models} ref={modelsRef} id = "model" label = "Model" sendChoosenItems = {getChoosedModels}/>                            
                                <Select items = {colors} ref={colorsRef} id = "color" label = "Color" sendChoosenItems = {getChoosedColors}/>                  
                                <Button title = "Filter" onClick = {searchHandler} type = 'button' backColor = '#3399ff'/>
                                {isSearchOpen && <button className = 'discard-btn' onClick = {removeCriteriasHandler}>
                                                        <DiscardIcon/>
                                                </button>}
            </div>

        </div>
    )
}

export default Search