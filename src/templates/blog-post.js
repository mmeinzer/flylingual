import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import moment from 'moment'

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const postTitle = post.frontmatter.title
  const dateTime = moment(post.frontmatter.date)

  return (
    <article>
      <Helmet title={`${postTitle} | ${siteTitle}`} />
      <h1>{postTitle}</h1>
      <p>
        <time dateTime={dateTime.format()}>{dateTime.format('MMM Do, YYYY')}</time>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`
