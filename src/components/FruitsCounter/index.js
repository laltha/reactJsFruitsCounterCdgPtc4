// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onClickMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  onClickBanana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="sm-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes
            <span className="count"> {banana}</span> bananas
          </h1>
          <div className="fruitContainer">
            <div className="button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onClickMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="button1-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="banana"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onClickBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
