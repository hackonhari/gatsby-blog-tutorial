import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default function Contact({ data }) {
  console.log({ data })
  return (
    <Layout>
      <h1>Contact Form</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfO2mnp0exX7C5vyHbZ1riTPN5jRNcfs4GtqGMo2yVxi8HuLw/viewform?embedded=true"
        width="640"
        height="690"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="contact-form"
        css={css`
          @media (max-width: 420px) {
            width:320px;
            height:690px;
            margin:20px auto;
          }
        `}
      >
        Loading contact form…
      </iframe>
    </Layout>
  )
}


//page query can be used only in page components
