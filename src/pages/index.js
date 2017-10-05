import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import moment from 'moment'
import styles from './index.module.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div className={styles.posts}>
        <Helmet title={siteTitle} />
        {posts.map(post => {
          const {path, date, title: postTitle} = post.node.frontmatter
          if (path !== '/404/') {
            const title = postTitle || path
            const dateTime = moment(date)
            return (
              <section key={path}>
                <h2>
                  <Link to={path} >
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
