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

`;

export default Products