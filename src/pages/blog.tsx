import React from "react";
import { Link, graphql } from "gatsby";
import { PageLayout } from "../components/PageLayout";
import { Button, Center, Container, Title, Tooltip, rem } from '@mantine/core';

const BlogPage = ({ data }) => {
  return (
    <PageLayout>
      <Container pt={80} size="lg" mb={0} style={{ paddingTop: '20px', paddingBottom: '0px' }}> {/* Adjust padding as needed */}
      <div>
        <h1>Blog</h1>
        <ul>
          {data.allMdx.nodes.map(node => (
            <li key={node.id}>
              <Link to={node.frontmatter.slug}>
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
