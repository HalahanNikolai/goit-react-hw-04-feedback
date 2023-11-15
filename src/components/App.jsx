import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  realFeedback = evnt => {
    this.setState({ [evnt]: this.state[evnt] + 1 });
  };
  countFeedbackStat = ({ good,  bad }) => good +  bad;
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countFeedbackPos = ({good}) => {
    const temp = Math.round((good * 100) / this.countFeedbackStat(this.state))
    return temp ? temp : 0;
  };
  

  render() {
    const { good, neutral, bad } = this.state;
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
            // options={options}
            // onLeaveFeedback={this.hendleClick}
             options={Object.keys(this.state)}
            onLeaveFeedback={this.realFeedback}
          />
        </Section>  
    <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countFeedbackPos(
              this.state
            )}
          >
            
          </Statistics>
        </Section>
        <GlobalStyle />
    
    </div>

    )
  }










}
