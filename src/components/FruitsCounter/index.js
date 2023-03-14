import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {bananasCount: 5, mangoesCount: 4}

  onClickEatMango = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="app-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate {mangoesCount} mangoes {bananasCount} bananas
          </h1>
          <div className="counters-control-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              className="fruit-image"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              className="fruit-image"
              alt="banana"
            />
            <div className="empty">
              <button
                type="button"
                className="button"
                onClick={this.onClickEatBanana}
              >
                Eat Mango
              </button>
              <button
                type="button"
                className="button"
                onClick={this.onClickEatMango}
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
