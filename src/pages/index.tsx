import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { PageLayout } from "../components/PageLayout";
import { Badge, Center, Container, Divider } from '@mantine/core';
import SocialMediaBar from "../components/SocialMediaBar/SocialMediaBar";
import Projects from "../components/Projects/Projects";
import { DotGrid } from "../components/DotGrid/DotGrid";
import { graphql } from "gatsby";


export default function HomePage({ data }) {
  return (
    <PageLayout>
      <DotGrid />
      <Welcome />
      <SocialMediaBar />
      <Projects data={data} />
    </PageLayout>
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
  }`;
