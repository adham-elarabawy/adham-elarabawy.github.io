import React from "react";
import { PageLayout } from "../components/PageLayout";
import { graphql } from "gatsby";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { Center } from "@mantine/core";

export default function HomePage({ data }) {
  const projects = data.allMdx.nodes.sort((a, b) => a.frontmatter.sort_id - b.frontmatter.sort_id);

  return (
    <PageLayout>
      <Center style={{ marginTop: '100px' }}>
        <div> 
          {projects.map(project => (
            <div key={project.id}>
              <ProjectCard project={project.frontmatter} />
            </div>
          ))}
        </div>
      </Center>
    </PageLayout>
  );
}

export const query = graphql`
  query {
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
