import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const PostTemplate = ({data: post }) => (
  <Layout>
    <div>
      <h1>{post.markdownremark.frontmatter.title}</h1>
      <h4>
        {post.markdownRemark.timeToRead}{' '}
        {post.markdownRemark.timeToRead > 1 ? 'minutes' : 'minute'}
      </h4>
    </div>
  </Layout>
)

export const query = graphql `
  query($slug: String!) {

  }
`

export default PostTemplate