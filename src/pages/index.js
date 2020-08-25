import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import SimpleSlider from "../components/slider"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />

      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <SimpleSlider />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <Fade bottom >
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 2)};
                  `}
                >
                  {node.frontmatter.title}
                  {""}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                    -{node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </Fade>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
