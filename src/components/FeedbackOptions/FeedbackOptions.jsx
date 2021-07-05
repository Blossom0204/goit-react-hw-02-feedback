import { Component } from 'react'
import PropTypes from 'prop-types'
import { FeedbackButtons } from './FeedbackOptions.styles.jsx'
import { CustomButton } from './FeedbackOptions.styles.jsx'

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props
    return (
      <FeedbackButtons>
        {options.map((option) => (
          <CustomButton key={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </CustomButton>
        ))}
      </FeedbackButtons>
    )
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions
