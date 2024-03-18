import React from "react";
import { PageLayout } from "../../components/PageLayout";
import { graphql } from "gatsby";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Center } from "@mantine/core";

export default function Projects({ data }) {
  const projects = data.allMdx.nodes.sort((a, b) => a.frontmatter.sort_id - b.frontmatter.sort_id);


  return (
      <Center style={{ marginTop: '20px' }}>
        <div> 
          {projects.map(project => (
            <div key={project.id}>
              <ProjectCard project={project.frontmatter} />
            </div>
          ))}
        </div>
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
        }
      }
    }
  }`;
