import React from "react";

//Images
import logo1 from '../images/logo1.svg'
import logo2 from '../images/logo2.svg'
import logo3 from '../images/logo3.svg'

function CardSlider (){
    return(
        <section className="card-slider-section">
            <div className="card-slider-section__container">
                <div className="card-slider-section__container--card">
                    <div className="card-slider-section__container--card-info">
                        <img src={logo1} alt="logo" />
                        <p>Lucas ipsum dolor sit amet lars sidious anakin yoda mace ahsoka hutt kessel wedge lando.</p>
                    </div>    
                </div>
                <div className="card-slider-section__container--card">
                    <div className="card-slider-section__container--card-info">
                        <img src={logo2} alt="logo" />
                        <p>Lucas ipsum dolor sit amet lars sidious anakin yoda mace ahsoka hutt kessel wedge lando.</p>
                    </div>
                </div>
                <div className="card-slider-section__container--card">
                    <div className="card-slider-section__container--card-info">
                        <img src={logo3} alt="logo" />
                        <p>Lucas ipsum dolor sit amet lars sidious anakin yoda mace ahsoka hutt kessel wedge lando.</p>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default CardSlider;

