import {useState, useEffect} from 'react';
import throttle from 'lodash.throttle';

//control slides width on each breakpoint for responsiveness
const getDeviceConfig = (width) => {
  if(width < 320) {
    return 97;
  } else if(width >= 320 && width < 720 ) {
    return 97;
  } else if(width >= 720 && width < 1024) {
    return 55;
  } else if(width >= 1024) {
    return 30;
  }
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));
  
  useEffect(() => {
    const calcInnerWidth = throttle(function() {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200); 
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
}
export default useBreakpoint;