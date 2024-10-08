import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
import Banner from './components/Banner';
import Conteudo from './components/Conteudo';

function App() {
  return (
    <div>
      <AnimatedBackground animationName="quantumField" />
      {/* starryNight, particleNetwork, fireflies, matrixRain, quantumField, cosmicDust */}
      <Banner />
      <Conteudo />
    </div>
  );
}
export default App;