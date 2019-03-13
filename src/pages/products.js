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

  getProducts = user => {
    console.log('Current User', user)
  }

  render() {
    const { products } = this.state

    return (
      <Layout>
        <div>
          {/* Products List */}
          {
            products.map(({ node: product }) => (
              <div key={product.id}>
                <h2>Couture Products</h2>
                <Link
                  to={`/products/${product.slug}`}
                  style={{
                    textDecoration: 'none', 
                    color: '#551a8b'
                  }}
                >
                  <h3>
                    {product.name} ·{' '}
                    <span
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 300,
                        color: '#f60',
                      }}
                    >
                      ${product.price}
                    </span>
                  </h3>
                </Link>
              </div>
            ))
          }
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