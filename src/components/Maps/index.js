import React from 'react'
import './style.css'

const Maps = ({mapLink}) => {
  return(
    <div className="maps-container">
      <iframe title="map"
        src={mapLink}
        width="100%" 
        height="200vh">
      </iframe>
    </div>
  )
}

export default Maps