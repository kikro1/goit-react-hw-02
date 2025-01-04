import { useEffect, useState } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

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
  };
  const totalFeedback = () => {
    return values.good + values.neutral + values.bad;
  };
  const positiveFeedbackPercentage = () => {
    const total = totalFeedback();
    return total === 0 ? 0 : Math.round((values.good / total) * 100);
  };

  const hasFeedback = totalFeedback() > 0;

  return (

    <div>
        <Description />

      <div className='wrapper'>
        <Options
        onFeebback={updateValues}
        onReset={resetValues}
        hasFeedback={hasFeedback}
        />
        {hasFeedback ? (
          <Feedback values={values}
          total={totalFeedback()}
          positive={positiveFeedbackPercentage()}
          />
        ) : (
          <Notification
          message="There is no feedback"/>
        )}
      </div>

    </div>
  );
};

export default App;

