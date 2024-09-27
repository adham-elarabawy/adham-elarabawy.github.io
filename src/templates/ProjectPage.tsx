import React from "react";
import { graphql, navigate } from "gatsby"; // Ensures necessary functions are imported.
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import { PageLayout } from "../components/PageLayout";
import { Button, Container } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

const shortcodes = { Link }; // Provides shorthand for embedding components within MDX.

// Define the page template component, accepting `data` and `children` props.
export default function PageTemplate({ data, children }) {
  const handleBackClick = () => {
    navigate("/"); // Adjust the path as necessary.
  };

  return (
    <PageLayout>
      <Container pt={100}>
        <Button
          leftSection={<IconArrowLeft size={14} />}
          onClick={handleBackClick} // Attaches the navigation handler to the button.
        >
          Back to Projects
        </Button>
        <h1>{data.mdx.frontmatter.title}</h1>
        {/* Use `<p>` for the description to better match the semantic and visual hierarchy. */}
        <p>{data.mdx.frontmatter.description}</p>
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
      </Container>
    </PageLayout>
  );
}

// GraphQL query to retrieve MDX data based on a provided ID.
export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        url_override
      }
    }
  }
`;
