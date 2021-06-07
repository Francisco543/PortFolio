import React from 'react'
import Wave from 'react-wavify'

const WaveFooter = () => {
    return ( 
        <Wave fill='#1a0f0f'
        paused={false}
        options={{
          height: 350,
          amplitude: 20,
          speed: 0.2,
          points: 3
          
        }}       
  />
    );
}
 
export default WaveFooter;