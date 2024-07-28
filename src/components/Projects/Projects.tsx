import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { graphql } from "gatsby";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Center, SimpleGrid } from "@mantine/core";

export default function Projects({ data }) {
  const projects = data.allMdx.nodes.sort((a, b) => a.frontmatter.sort_id - b.frontmatter.sort_id);


  return (
        <Center style={{ marginTop: '20px' }}>
            <SimpleGrid cols={{ base: 1, sm: 2}} spacing="sm" verticalSpacing="sm">
                {projects.map(project => (
                    <div key={project.id}>
                    <ProjectCard project={project.frontmatter} />
                    </div>
                ))}
            </SimpleGrid>
      </Center>
  );
}

export const query = graphql`
  query ProjectsQuery {
    allMdx(
    sort: {frontmatter: {sort_id: ASC}}
    filter: {internal: {contentFilePath: {regex: "/projects/"}}}
    ) {
      nodes {
        id
        frontmatter {
          sort_id
          title
          slug
          description
          date
          featured_image
        }
      }
    }
  }
`;
