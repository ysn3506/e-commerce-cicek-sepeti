import React, { useEffect, useRef } from 'react';
import './App.scss';
import { setLoading } from './storage/redux/actions';
import { initializeApp } from './utils/helpers';

function App() {
  const appRef = useRef(false);
  useEffect(() => {
      if (appRef.current) return;
    appRef.current = true;
    setLoading(true);
    initializeApp().then(() => {
      setLoading(false)
    });

  }, [])
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
