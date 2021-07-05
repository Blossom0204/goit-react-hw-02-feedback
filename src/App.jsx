import { Component } from 'react'
import Statistics from './components/Statistics/Statistics'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import './App.css'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  onLeaveFeedback = (e) => {
    const value = e.currentTarget.textContent
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      }
    })
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state
    const totalFeedbacks = this.countTotalFeedback()

    const positiveFeedbacks =
      good !== 0 ? Math.round((good * 100) / totalFeedbacks) : 0

    return positiveFeedbacks
  }
  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    const options = Object.keys(this.state)

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </>
    )
  }
}
export default App
