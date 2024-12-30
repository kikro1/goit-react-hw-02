import { useEffect, useState } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/AllFeedback/AllFeedback';

import './App.css';

function App() {

  const [values, setValues] = useState(() => {
    const storedValues = localStorage.getItem('feedbackValues');
    return storedValues ? JSON.parse(storedValues) : {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  useEffect(() => {
    localStorage.setItem('feedbackValues', JSON.stringify(values));
  }, [values]);

  const updateValues =(key) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: prevValues[key] + 1,
    }));

  };

  const resetValues = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }
  const total = () => {
    return values.good + values.neutral + values.bad;
  }
  const positive = () => {
    const totalCount = total();
    return totalCount === 0 ? 0 : Math.round((values.good / totalCount) * 100);
  }

  return (

    <div>
        <Description />

      <div className='wrapper'>
        <Options onUpdate={() => updateValues('good')}> Good</Options>
        <Options onUpdate={() => updateValues('neutral')}> Neutral</Options>
        <Options onUpdate={() => updateValues('bad')}> Bad</Options>
        <Options onUpdate={resetValues}>Reset</Options>
      </div>

      <Feedback values={values} total={total()} positive={positive()} />
    </div>
  );
};

export default App;

