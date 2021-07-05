import PropTypes from 'prop-types'
import { SectionText } from './Section.styles'

function Section({ title, children }) {
  return (
    <>
      <SectionText>{title}</SectionText>
      {children}
    </>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
