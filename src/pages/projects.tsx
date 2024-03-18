import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { PageLayout } from "../components/PageLayout";
import { Center, Card, Text, Group, Button } from "@mantine/core";
import { graphql, Link as GatsbyLink } from "gatsby";

export default function HomePage({ data }) {
  const projects = data.allMdx.nodes;

  return (
    <PageLayout>
      <Center mt={100}>
        <h1>Projects</h1>
      </Center>
      {/* Map over the projects and render a block for each */}
      <Center style={{ flexDirection: 'column' }}>
        {projects.map(project => (
          <Card key={project.id} shadow="sm" p="lg" radius="md" m="md" style={{ maxWidth: '320px', margin: '20px' }}>
            <Card.Section>
              <Text weight={500} size="lg">{project.frontmatter.title}</Text>
            </Card.Section>
            <Text mt="md">{project.frontmatter.description}</Text>
            <Group position="apart" mt="md">
              <Text size="sm" color="dimmed">{project.frontmatter.date}</Text>
              <Button
                component={GatsbyLink}
                to={project.frontmatter.slug}
                variant="light"
              >
                Read more
              </Button>
            </Group>
          </Card>
        ))}
      </Center>
    </PageLayout>
  );
}


export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          slug
          description
          date
        }
      }
    }
  }`;
