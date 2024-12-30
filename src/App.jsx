import { useEffect, useState } from 'react'
import Description from './components/Description/Description';
import './App.css'

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

      <button onClick={() => updateValues('good')}>Good</button>
      <button onClick={() => updateValues('neutral')}>Neutral</button>
      <button onClick={() => updateValues('bad')}>Bad</button>
      <button onClick={resetValues}> Reset</button>

      <div>
            <p>Good: {values.good}</p>
            <p>neutral: {values.neutral}</p>
            <p>Bad: {values.bad}</p>
            <p>Total: {total()}</p>
            <p>Positive: {positive()}%</p>
        </div>
    </div>
  );
}

export default App;

