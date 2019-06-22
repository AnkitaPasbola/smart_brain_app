import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma2 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 60, width: 60 }} >
        <div className="Tilt-inner pa1">
          <img style={{paddingTop: '2px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;