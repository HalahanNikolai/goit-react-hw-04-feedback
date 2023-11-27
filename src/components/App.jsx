// import React, { Component } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

    const realFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  // realFeedback = evnt => {
  //   this.setState({ [evnt]: this.state[evnt] + 1 });
  // };

  const countFeedbackStat = () => good + bad;
  
  const countTotalFeedback = () => good + neutral + bad;
  // countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

 const countFeedbackPos = () => {
    const temp = Math.round((good * 100) / countFeedbackStat())
    return temp ? temp : 0;
  };
  
  // render() {
  //   const { good, neutral, bad } = this.state;

    return (
<div
      style={{
        display: 'flex',
  margin: '0 auto',
  marginTop: '50px',
  flexDirection: 'column',
  textAlign: 'center',
  borderRadius: '20px',
  padding:'20px',
  boxShadow: '5px 5px 25px rgb(198, 241, 252)',
  backgroundColor: '#a8d1e0',
  borderColor: 'none',
  width: '550px',
  height: 'auto',
      }}
      >
              <Section title="Please leave feedback">
          <FeedbackOptions
             options={Object.keys({ good, neutral, bad})}
            //  options={Object.keys(this.state)}
            onLeaveFeedback={realFeedback}
            // onLeaveFeedback={this.realFeedback}
          />
        </Section>  
    <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            // total={this.countTotalFeedback(this.state)}
            positivePercentage={countFeedbackPos()}
          >
            
          </Statistics>
        </Section>
        <GlobalStyle />
    
    </div>

    )
  }


