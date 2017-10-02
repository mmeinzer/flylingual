import React from 'react'
import Link from 'gatsby-link'

const Template = (props) => {
  const { location, children } = props
  let header
  
  if (location.pathname === '/') {
    header = (
      <h1>
        <Link to={'/'} >
          FlyLingual
        </Link>
      </h1>
    )
  } else {
    header = (
      <div>
        <Link to={'/'}>
          FlyLingual
        </Link>
      </div>
    )
  }
  return (
    <div>
      {header}
      {children()}
    </div>
  )
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
}

export default Template
