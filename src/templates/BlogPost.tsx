import React from "react";
import { graphql, navigate } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import { PageLayout } from "../components/PageLayout";
import { Button, Container } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

const shortcodes = { Link }; // Allows using React components in MDX files.

export default function BlogPostTemplate({ data , children}) {
  const handleBackClick = () => {
    navigate("/blog"); // Adjust to navigate back to the blog listing.
  };

  return (
    <PageLayout>
      <Container pt={100}>
        <Button
          leftSection={<IconArrowLeft size={14} />}
          onClick={handleBackClick}
        >
          Back to Blog
        </Button>
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
      </Container>
    </PageLayout>
  );
}

export const query = graphql`
  query BlogPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
