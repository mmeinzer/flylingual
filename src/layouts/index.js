import React from 'react'
import Link from 'gatsby-link'

const Template = (props) => {
  const { children, location, data } = props
  const siteName = data.site.siteMetadata.title
  let header  
  if (location.pathname === '/') {
    header = (
      <h1>
        <Link to={'/'}>
          {siteName}
        </Link>
      </h1>
    )
  } else {
    header = (
      <div>
        <Link to={'/'}>
          {siteName}
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
  data: React.PropTypes.object,
}

export default Template

export const pageQuery = graphql`
query HeaderQuery {
  site {
    siteMetadata {
      title
    }
  }
}`
