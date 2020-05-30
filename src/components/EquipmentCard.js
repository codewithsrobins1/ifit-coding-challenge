import React from 'react'

function EquipmentCard(props) {
    return (
        <div className="equipment-card">
            <div className="equipment-card__container">
                <img src={props.cardImg} alt='equipemt' className="equipment-card__container--image" />
                <h1 className="equipment-card__container--title">{props.cardTitle}</h1>
            </div>
        </div>
    )
}

export default EquipmentCard
