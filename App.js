import React, {useState, useEffect} from 'react';
import {Dashboard, Splash} from './src/screens/';

const App = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return <>{load ? <Splash /> : <Dashboard />}</>;
};

export default App;
