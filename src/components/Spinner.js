import React from 'react'
import loading from '../img/Spinner-1s-200px.gif'

const Spinner = () => {
  return (
    <div className="text-center mb-3">
      <img className='loading-img' src={loading} alt="loading-gif" />
    </div>
  )
}

export default Spinner
