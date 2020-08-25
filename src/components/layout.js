import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0px auto;
        max-width: 700px;
        padding: ${rhythm(1.6)};
        @media (max-width: 420px) {
          padding: ${rhythm(1)};
          display:grid;
        }
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(1.3)};
            display: inline-block;
            font-style: normal;
            &:hover {
              color: darkblue;
            }
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about`}
        css={css`
          float: right;
          &:hover {
            text-decoration: none;
          }
        `}
      >
        About
      </Link>
      <Link
        to={`/my-files`}
        css={css`
          float: right;
          margin-right: 10px;
          &:hover {
            text-decoration: none;
          }
        `}
      >
        My Files
      </Link>
      <Link
        to={"/contact"}
        css={css`
          float: right;
          margin-right: 10px;
          &:hover {
            text-decoration: none;
          }
        `}
      >
        Contact
      </Link>
      {children}
    </div>
  )
}
