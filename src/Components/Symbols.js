import React from 'react'
import { useSelector } from 'react-redux'
import { currencies } from '../assets/initialCountry'
import { selectDisplay } from '../redux/slices/displayCountrySlice'


const Symbols = () => {
    let currentDisplay = useSelector(selectDisplay)
    
    return (
        <h1 className='symbols'>
            <div className='stack'>
                <h2>Flag of {currentDisplay.name.common}</h2>
                <img src={currentDisplay.flags.png}></img>
            </div>
            <div className='stack'>
            <h2>Coat of Arms of {currentDisplay.name.common}</h2>
                <img src={currentDisplay.coatOfArms.png}></img>
            </div>
        </h1>
    )
}

export default Symbols