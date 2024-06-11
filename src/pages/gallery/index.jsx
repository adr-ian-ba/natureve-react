// eslint-disable-next-line no-unused-vars
import React from 'react'
import plantData from '../../assets/tempBe/PlantInfo.json'; 
import Navbar from '../../components/Navbar'

const index = () => {
  return (
    <div>
        <Navbar/>
        <div className="plants-wrapper"></div>

        <div className="gallery">
        {plantData.map((plant, index) => (
        <div className="plant-card" key={index}>
          <img src={plant.image_link} alt={plant.name} />
          <div className="plant-details">
            <h2>{plant.name}</h2>
            <p><strong>Sunlight:</strong> {plant.sunlight}</p>
            <p><strong>Water:</strong> {plant.water}</p>
            <p><strong>Overall Rating:</strong> {plant.overall_rating}</p>
            <p>{plant.description}</p>
            <p><strong>Suitable Places:</strong> {plant.suitable_places}</p>
          </div>
        </div>
      ))}
        </div>

        
    </div>
  )
}

export default index