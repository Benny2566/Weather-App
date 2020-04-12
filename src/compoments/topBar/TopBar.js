import React from 'react'
import CelsiusSwitch from './CelsiusSwitch'
import LocationButton from './LocationButton'
import SearchBar from './SearchBar'
import Time from './Time'
import './TopBar.css'

function TopBar() {

    return(
        <div className = 'tbBackground'>
            <div className = 'elementBox'>
                <div className = 'gap' />
                <CelsiusSwitch />
                <div className = 'gap' />
                <SearchBar />
                <div className = 'gap' />
                <LocationButton />
                <div className = 'gap' />
            </div>
            <Time />
        </div>
    )
}
export default TopBar