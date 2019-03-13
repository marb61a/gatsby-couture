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
        {contentfulProduct.name} -{' '}
        <span style={{ color: '#ccc' }}>
          Added on {contentfulProduct.createdAt}
        </span>
      </h2>
      <h4>${contentfulProduct.price}</h4>
      <p>{contentfulProduct.description}</p>
      <button
        style={{
          background: 'darkorange',
          color: 'white',
          padding: '0.3em',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
      
      </button>
    </div>
  </Layout>  
)

export default ProductTemplate

export const query = graphql`
  query($slug: String!) {
    slug
    name
    price
    description
    createdAt(formatString: "MMMM Do, YYYY, h:mm:ss a")
    image {
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid
      }
      file {
        url
      }
    }
  }
`