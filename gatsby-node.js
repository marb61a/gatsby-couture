const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const PostTemplate = path.resolve('./src/templates/post-template.js')
const BlogTemplate = path.resolve('./src/templates/blog-template.js')
const ProductTemplate = path.resolve('./src/templates/product-template.js')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if(node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: 'posts' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

