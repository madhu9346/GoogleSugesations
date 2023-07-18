import './index.css'

const SuggestionsItem = props => {
  const {destinationDetails, moveInput} = props
  const {id, suggestion} = destinationDetails
  const moveTo = () => {
    moveInput(suggestion)
  }
  return (
    <li className="listItem">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={moveTo}
      />
    </li>
  )
}
export default SuggestionsItem
