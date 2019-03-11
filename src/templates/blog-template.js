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
        <h4>{}Posts</h4>
        
      </div>
    </Layout>
  )
}

export const query = graphql `
  ($skip: Int!, $limit: Int!) {
    allMarkdownRemark (

    )
  }
`