import React from 'react';
import CountUp from 'react-countup';

const AnimatedNumber = ({ end, suffix = '', duration = 2.5 }) => {
  return (
    <CountUp 
      start={0} 
      end={end} 
      duration={duration} 
      suffix={suffix} 
      enableScrollSpy={true}
      scrollSpyOnce={true}
    />
  );
};

export default AnimatedNumber;
