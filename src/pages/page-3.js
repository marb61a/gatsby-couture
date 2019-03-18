import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

const getImageData = graphql `
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`;

export default () => (
  <Layout>
    <h1>Hello from Page 3!</h1>
    <h3>Image File Data</h3>
    <StaticQuery
      query={getImageData}
      render={}
    />
    <Link to="/page-2">Go to page 2</Link>
  </Layout>
)