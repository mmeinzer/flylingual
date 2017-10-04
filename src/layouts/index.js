import React from 'react'
import Link from 'gatsby-link'

const Template = (props) => {
  const { children, location, data } = props
  const siteName = data.site.siteMetadata.title
  let header  
  if (location.pathname === '/') {
    header = (
      <header>
        <h1>
          <Link to={'/'}>
            {siteName}
          </Link>
        </h1>
        <nav>
        </nav>
      </header>
    )
  } else {
    header = (
      <header>
        <Link to={'/'}>
          {siteName}
        </Link>
      </header>
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
