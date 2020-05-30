import React from 'react'


function WorkOutCard(props) {
    return (
        <div className="workout-card">
            <div className="workout-card-container">
                <img className="workout-card-container__image" src={props.cardImg} alt='card'/>
                <div className="workout-card-container__info">
                    <h2 className="workout-card-container__info--title">{props.title}</h2>
                    <img className="workout-card-container__info--image" src={props.cardIcon} alt='icon' />
                    <p className="workout-card-container__info--card">View Details</p>
                </div>
            </div>  
            
        </div>
    )
}

export default WorkOutCard
