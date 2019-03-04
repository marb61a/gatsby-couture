import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import Layout from '../components/layout';

const getMarkdownPosts = graphql `
{
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
        }
        excerpt
      }
    }
  }
}`;

export default () => (
  <Layout>
    <div>
      <h1
        style={{display: 'inlineBlock', borderBottom: '1px solid'}}
      >
        Gatsby Couture blog
      </h1>
      <StaticQuery 
        query={getMarkdownPosts}
        render={data => (
          <>
            <h4>{data.allMarkdownRemark.totalCount}</h4>
          </>
        )}
      />
    </div>
  </Layout>
)