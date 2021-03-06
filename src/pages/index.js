import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../templates/Layout";
import Posts from "../components/Posts";
import SEO from "../components/SEO/SEO";

export default class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO />
        <Posts data={data} />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredimage
            author
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
