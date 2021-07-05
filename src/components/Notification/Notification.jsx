import PropTypes from 'prop-types'
import { SectionText } from './Notification.styles'

function Notification({ message }) {
  return <SectionText>{message}</SectionText>
}

export default Notification

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
