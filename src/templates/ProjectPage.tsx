import React from "react"
import { graphql, navigate } from "gatsby" // Import `navigate` here
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { PageLayout } from "../components/PageLayout"
import { Button, Container } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"

const shortcodes = { Link } // Shortcodes for common components

export default function PageTemplate({ data, children }) {
  // Function to handle back button click, navigating to the "/projects" path
  const handleBackClick = () => {
    navigate("/"); // Replace "/projects" with your specific path
  };

  return (
    <PageLayout>
      <Container pt={100}>
        <Button
          leftSection={<IconArrowLeft size={14} />}
          onClick={handleBackClick} // Attach the `onClick` handler
        >
          Back to Projects
        </Button>
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
