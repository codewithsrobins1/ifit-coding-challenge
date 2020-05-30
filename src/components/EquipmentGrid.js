import React from 'react'

//Components
import EquipmentCard from './EquipmentCard'

//Images
import bike from '../images/bike.jpg'
import elliptical from '../images/elliptical.jpg'
import pulley from '../images/pulley.jpg'
import treadmill from '../images/treadmill.jpg'

function EquipmentGrid() {
    return (
        <section className="equipment-grid-section">
            <h1 className="equipment-grid-section__header">Interested in our exciting iFit-enabled equipment?</h1>
            <div className="equipment-grid-section__container">
                <EquipmentCard
                    cardImg={treadmill}
                    cardTitle="Treadmills"
                />
                <EquipmentCard
                    cardImg={bike}
                    cardTitle="Bikes"
                />
                <EquipmentCard
                    cardImg={elliptical}
                    cardTitle="Ellipticals"
                />
                <EquipmentCard
                    cardImg={pulley}
                    cardTitle="Pulleys"
                />
            </div>
        </section>
    )
}

export default EquipmentGrid
