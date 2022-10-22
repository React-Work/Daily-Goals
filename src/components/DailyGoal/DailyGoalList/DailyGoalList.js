import React from 'react';

import DailyGoalItem from '../DailyGoalItem/DailyGoalItem';
import './DailyGoalList.css';

const DailyGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <DailyGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </DailyGoalItem>
      ))}
    </ul>
  );
};

export default DailyGoalList;
