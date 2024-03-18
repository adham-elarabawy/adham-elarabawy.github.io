import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { PageLayout } from "../components/PageLayout"
import { Center, Container } from "@mantine/core"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }) {
  return (
    <PageLayout>
        <Container mt={100}>
            <h1>{data.mdx.frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>
                {children}
            </MDXProvider>
        </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`