import { useState, useEffect } from 'react'

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/feedback/feedback';

import './App.css'

function App() {

  const [feedback, setFeedback] = useState ( {
      good: 0,
      neutral: 0,
      bad: 0
    }
    
  );
  
  // useEffect, options, setOptions

  return (

    <div>
      <Description />
      <Options />
      <Feedback />

    </div>
  );

}

export default App
