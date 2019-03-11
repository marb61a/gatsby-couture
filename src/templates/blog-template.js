import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ data, pageContext }) => {
  const {
    currentPage,
    isFirstPage,
    isLastPage,
    totalPages
  } = pageContext

  return (
    <Layout>
      <div>
        <h1
          style={{display: 'inlineBlock', borderBottom: '1px solid'}}
        >
          Gatsby Couture Blog
        </h1>
        <h4>{data.allMarkdownRemark.totalCount}Posts</h4>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>
              
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))
        }

        {/*Links for pagination */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            maxWidth: 300,
            margin: '0 auto',
          }}
        >
        
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
  ($skip: Int!, $limit: Int!) {
    allMarkdownRemark (
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        fields {
          slug
        }
        id
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
        }
        excerpt
      }
    }
  }
`