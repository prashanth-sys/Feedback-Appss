// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    const {isEmojiClicked} = this.state

    if (isEmojiClicked === true) {
      ;<img src={emojis} alt="name" />
    } else {
    }
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    const {isEmojiClicked} = this.state

    if (isEmojiClicked === false) {
      ;<img src={loveEmojiUrl} alt="name" />
    } else {
    }
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="main-heading">
            How satisfied are you with our customer support performance?
          </h1>
          {isEmojiClicked
            ? this.renderFeedbackQuestion()
            : this.renderThankYouScreen()}
        </div>
      </div>
    )
  }
}
export default Feedback
