import React from 'react'
import WorkOutCard from './WorkOutCard'

//Card Images
import mainImg1 from '../images/main-grid-1.jpg'
import mainImg2 from '../images/main-grid-2.jpg'
import mainImg3 from '../images/main-grid-3.jpg'
import mainImg4 from '../images/main-grid-4.jpg'
import mainImg5 from '../images/main-grid-5.jpg'
import mainImg6 from '../images/main-grid-6.jpg'
import mainImg7 from '../images/main-grid-7.jpg'
import mainImg8 from '../images/main-grid-8.jpg'

//Icon Images
import trainer1 from '../images/trainer1.svg'
import trainer2 from '../images/trainer2.svg'
import trainer3 from '../images/trainer3.svg'
import trainer4 from '../images/trainer4.svg'
import trainer5 from '../images/trainer5.svg'
import trainer6 from '../images/trainer6.svg'
import trainer7 from '../images/trainer7.svg'
import trainer8 from '../images/trainer8.svg'

function WorkOutGrid() {
    return (
        <section className="workout-grid-container">
            <WorkOutCard
                title="Lake Inniscarra, Ireland--"
                cardImg={mainImg1}
                cardIcon={trainer1}
            />
            <WorkOutCard
                title="Performance Series"
                cardImg={mainImg2}
                cardIcon={trainer2}
            />
            <WorkOutCard
                title="Slow Pulls and Fast Intervals"
                cardImg={mainImg3}
                cardIcon={trainer3}
            />
            <WorkOutCard
                title="20 Minutes to Toned"
                cardImg={mainImg4}
                cardIcon={trainer4}
            />
            <WorkOutCard
                title="Charles Race, Boston Massachusetts"
                cardImg={mainImg5}
                cardIcon={trainer5}
            />
            <WorkOutCard
                title="Full-Body HITT Series"
                cardImg={mainImg6}
                cardIcon={trainer6}
            />
            <WorkOutCard
                title="Kafue River, Zambia--Power"
                cardImg={mainImg7}
                cardIcon={trainer7}
            />
            <WorkOutCard
                title="Shred and Burn Series"
                cardImg={mainImg8}
                cardIcon={trainer8}
            />
        </section>
    )
}

export default WorkOutGrid
