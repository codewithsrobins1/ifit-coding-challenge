import React from 'react'
import '../styles/Hero.css'
// import hero from '../images/hero.jpg'

function Hero() {
    return (
        <section className="hero-section">
            <div className='hero-section__container'>
                <h1 className="hero-section__container--heading">The best personal training right in your home</h1>
                <button id="heroBtn" className="hero-section__container--button">Join ifit coach</button>
            </div>
        </section>
    )
}

export default Hero
