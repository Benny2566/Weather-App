import React from 'react';
import './App.css';
import TopBar from './compoments/topBar/TopBar';
import GraphSection from './compoments/graphSection/GraphSection';
import MapSection from './compoments/mapSection/MapSection';
import DetailsSection from './compoments/detailsSection/DetailsSection';

function App() {
  return (
    <div className='background'>
      <TopBar />
      <div className = 'mainContent'>
        <div className = 'leftSideContent'>
          <GraphSection />
          <DetailsSection />
        </div>
        <MapSection />
      </div>
    </div>
  );
}

export default App;
