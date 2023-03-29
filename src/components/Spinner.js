import React, { Component } from 'react'
import loading from '../img/Spinner-1s-200px.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center mb-3">
        <img className='loading-img' src={loading} alt="loading-gif" />
      </div>
    )
  }
}

export default Spinner
