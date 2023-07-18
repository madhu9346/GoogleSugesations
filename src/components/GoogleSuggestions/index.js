import {Component} from 'react'

import SuggestionsItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  addChangeOf = event => {
    this.setState({searchInput: event.target.value})
  }

  moveInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state

    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="con1">
          <div className="con2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search Icon"
              className="searchIcon"
            />
            <input
              type="search"
              className="inputOf"
              placeholder="Search Google"
              onChange={this.addChangeOf}
              value={searchInput}
            />
          </div>
          <ul className="sub1">
            {searchResults.map(eachDestination => (
              <SuggestionsItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
                moveInput={this.moveInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
