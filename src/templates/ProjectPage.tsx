import React from "react";
import { graphql, navigate } from "gatsby"; // Ensures necessary functions are imported.
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import { PageLayout } from "../components/PageLayout";
import { Button, Container } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useMantineTheme } from "@mantine/core";

const shortcodes = { Link }; // Provides shorthand for embedding components within MDX.

// Define the page template component, accepting `data` and `children` props.
export default function PageTemplate({ data, children }) {
  const theme = useMantineTheme();
  const gridColor = theme.colorScheme === 'dark' ? 
    'rgba(255, 255, 255, 0.05)' : 
    'rgba(0, 0, 0, 0.05)';
  const bgColor = theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0];

  const handleBackClick = () => {
    navigate("/"); // Adjust the path as necessary.
  };

  return (
    <PageLayout>
      <div style={{
        minHeight: '100vh',
        backgroundImage: `
          linear-gradient(${gridColor} 0.5px, transparent 0.5px),
          linear-gradient(90deg, ${gridColor} 0.5px, transparent 0.5px)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '10px 10px',
        padding: '20px'
      }}>
        <Container>
          <Button
            leftSection={<IconArrowLeft size={16} />}
            onClick={handleBackClick} // Attaches the navigation handler to the button.
            variant="subtle"
            color={theme.colorScheme === 'dark' ? 'gray.4' : 'dark'}
            styles={(theme) => ({
              root: {
                padding: '8px 16px',
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateX(-4px)',
                  backgroundColor: 'transparent',
                }
              }
            })}
          >
            Back to Projects
          </Button>
          <div style={{
            backgroundColor: `${bgColor}ee`,
            padding: '30px',
            borderRadius: theme.radius.md,
            marginTop: '20px',
            backdropFilter: 'blur(5px)',
          }}>
            <h1>{data.mdx.frontmatter.title}</h1>
            {/* Use `<p>` for the description to better match the semantic and visual hierarchy. */}
            <p>{data.mdx.frontmatter.description}</p>
            <MDXProvider components={shortcodes}>
              {children}
            </MDXProvider>
          </div>
        </Container>
      </div>
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
