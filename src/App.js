import React, { useEffect } from "react";
import { useState } from 'react';
import Clock from './Clock';
import './index.css';



const App = () => {


  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState("");
  const [theme, setTheme] = useState('dark');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    setDeadline(input);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.className = theme;
  }, [theme]);

  const handleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }


  const getTimeDifference = () => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate.getTime() - now.getTime();
  };

  return (
    <section className={`background ${theme}`}>
     <div className="App">
      <input type='text' 
      placeholder="MM/DD/YYYY" 
      value={input} 
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Clock timeDifference={getTimeDifference()} />
        <button
        className={'button-switch ${theme}'}
        onClick={handleTheme}
        checked={theme === 'light'}
        > {theme === 'light' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
     </section>
  );
};


export default App; 