import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);
  if (feedback.length === 0) {
    average = 0;
  } else {
    average = average / feedback.length;
  }

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} reviews</h4>
      <h4>Average Rating : {average}</h4>
    </div>
  );
}

export default FeedbackStats;
