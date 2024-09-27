import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { graphql } from "gatsby";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Center, SimpleGrid } from "@mantine/core";

export default function Projects({ data }) {
  const projects = data.allMdx.nodes.sort((a, b) => a.frontmatter.sort_id - b.frontmatter.sort_id);

  console.log("Projects data:", projects); // Add this line

  return (
        <Center style={{ marginTop: '20px' }}>
            <SimpleGrid cols={{ base: 1, sm: 2}} spacing="sm" verticalSpacing="sm">
                {projects.map(project => (
                    <div key={project.id}>
                    <ProjectCard project={{...project.frontmatter, url_override: project.frontmatter.url_override}} />
                    </div>
                ))}
            </SimpleGrid>
      </Center>
  );
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx {
      nodes {
        id
        frontmatter {
          sort_id
          title
          slug
          description
          date
          featured_image
          type
          state
          url_override
        }
      }
    }
  }
`;
