import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

class Products extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.getProducts()
  }

  render() {
    const { products } = this.state

    return (
      <Layout>
        <div>
        
        </div>
      </Layout>
    )
  }  
}

export const query = graphql `
  allContentfulProduct {
    edges {
      node {
        id
        slug
        name
        price
        private
        image {
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default Products