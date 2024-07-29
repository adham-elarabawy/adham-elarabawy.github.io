import React from "react";
import { Link, graphql } from "gatsby";
import { PageLayout } from "../components/PageLayout";
import { Button, Center, Container, Title, Tooltip, rem } from '@mantine/core';

const BlogPage = ({ data }) => {
  return (
    <PageLayout>
      <Container pt={100}>
        <div>
          <h1>Blog</h1>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {data.allMdx.nodes.map(node => (
              <li key={node.id} style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '14px', color: '#888888' }}>
                  {new Date(node.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                <Link to={node.frontmatter.slug} style={{ fontSize: '20px', textDecoration: 'none'}}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </PageLayout>
  );
}

export const query = graphql`
  {
    allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {internal: {contentFilePath: {regex: "/blog/"}}}
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          slug
        }
      }
    }
  }
`;

export default BlogPage;
