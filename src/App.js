import React, { useState } from 'react';

import DailyGoalList from './components/DailyGoal/DailyGoalList/DailyGoalList';
import GoalInput from './components/DailyGoal/GoalInput/GoalInput';
import './App.css';

const App = () => {
  const [dailyGoals, setDailyGoal] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the Goals!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setDailyGoal(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setDailyGoal(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (dailyGoals.length > 0) {
    content = (
      <DailyGoalList items={dailyGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {dailyGoals.length > 0 && (
          <DailyGoalList
            items={dailyGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
