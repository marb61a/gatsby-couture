import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const ProductTemplate = ({ data: { contentfulProduct }, location }) => (
  <Layout>
    <div
      style={{
        marginLeft: '0 auto',
        width: '100%',
        textAlign: 'center',
      }}
    >
      {/* Product Info */}
      <h2>
      
      </h2>
    </div>
  </Layout>  
)

export default ProductTemplate

export const query = graphql`
  query($slug: String!) {
    
  }
`