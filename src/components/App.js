import React from 'react';

//Components
import TopMenu from './TopMenu'
import Hero from './Hero'
import CardSlider from './CardSlider'
import WorkOutGrid from './WorkOutGrid'
import EquipmentGrid from './EquipmentGrid'
import Footer from './Footer'

//Styles
import '../styles/sass/main.css'

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Hero />
      <CardSlider />
      <WorkOutGrid />
      <EquipmentGrid />
      <Footer />
    </div>
  );
}

export default App;
