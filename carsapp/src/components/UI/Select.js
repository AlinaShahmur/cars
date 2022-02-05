import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import './Select.css'

function fillObject(arr) {
    let obj = {};
    for (let item of arr) {
        obj[item] = false
    }
    return obj
}

const Select = forwardRef((props, ref) =>  {
    const [isItemsVisible, setIsItemsVisible] = useState(false)
    const [choosenItems, setChoosenItems] = useState({})
    const dropdownRef = useRef(null)
    const dropdownClasses = isItemsVisible ? 'dropdown-checklist visible' : 'dropdown-checklist' 
    console.log('updated')
    useEffect(() => {
        function handleClickOutside(event) {
          if (isItemsVisible && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsItemsVisible(false)
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    })
    useEffect(() => {       
        setChoosenItems(fillObject(props.items))
    },[props.items])
    const checkboxChangeHandler = (e) => {
        let key = e.target.value;
        setChoosenItems({...choosenItems, [key]: e.target.checked})
        console.log({...choosenItems, [key]: e.target.checked})
        props.sendChoosenItems({...choosenItems, [key]: e.target.checked})
    }
    useImperativeHandle(ref, () => ({
        removeCriterias() {
            console.log('in remove criterias')
            let choosenItemsCopy = {...choosenItems}
            for (let key in choosenItemsCopy) {
                choosenItemsCopy[key] = false
            }
            setChoosenItems(choosenItemsCopy)
            props.sendChoosenItems(choosenItemsCopy)
        }
    }))

    return (
        <div className={dropdownClasses} ref = {dropdownRef}>
            <span className="select" onClick = {() => setIsItemsVisible(!isItemsVisible)}>Select {props.label}</span>
            <ul className="items" >
                {props.items.map((item, index) => (
                    <li key = {index}><input value = {item} checked = {choosenItems[item]} type="checkbox" onChange = {checkboxChangeHandler}/>{item}</li>
                ))}
            </ul>
        </div>

    )
})

export default React.memo(Select)