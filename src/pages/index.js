import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import moment from 'moment'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        {posts.map(post => {
          if (post.node.frontmatter.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.frontmatter.path
            const dateTime = moment(post.node.frontmatter.date)

            return (
              <section key={post.node.frontmatter.path}>
                <h2>
                  <Link to={post.node.frontmatter.path} >
                    {title}
                  </Link>
                </h2>
                <p><time dateTime={dateTime.format()}>{dateTime.format('MMM Do, YYYY')}</time></p>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </section>
            )
          }
        })}
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
