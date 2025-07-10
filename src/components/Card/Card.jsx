import React, { Fragment } from 'react'
import './card.css'

const Card = ({title, image}) => {
  return (
    <Fragment>
      <div className="card">
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt="" />
        </div>
      </div>
    </Fragment>
  )
}

export default Card
