import './App.css';
import dataFromServer from './utils/dataFromServer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cars from './components/Cars';
import ChangedCars from './components/ChangedCars/ChangedCars';
import CreateCar from './components/CreateCar';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch()
  const [isAddCarVisible, setIsAddCarVisible] = useState(false)
  const [isChangedCarsVisible, setIsChangedCarsVisible] = useState(false)
  useEffect(() => {
    dataFromServer.getAllItems('http://localhost:8000/api/cars').then(data => {
      let cars = []
      data.forEach(item => {
        item.status = 'unchanged'
        cars.push(item)
      })
      dispatch({type: 'LOAD', payload: cars})
    })
  },[])
  const closeCreateCarHandler = () => {
    setIsAddCarVisible(false)
  }

  return (
    <div className="cars">
      <Header onToggleChangedCars = {() => setIsChangedCarsVisible(!isChangedCarsVisible)} 
              clickCreateCarHandler = {() => setIsAddCarVisible(!isAddCarVisible)}
      />
      {isAddCarVisible && <CreateCar 
                          onClose = {closeCreateCarHandler}
                          />}
      <Cars/>
      <ChangedCars 
         isVisible = {isChangedCarsVisible}
        closeButtonHandler = {() => setIsChangedCarsVisible(false)}
      />

    </div>
  );
}

export default App;
