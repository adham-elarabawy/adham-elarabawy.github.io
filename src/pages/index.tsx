import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { PageLayout } from "../components/PageLayout";
import { Badge, Center, Container, Divider } from '@mantine/core';
import SocialMediaBar from "../components/SocialMediaBar/SocialMediaBar";
import Projects from "../components/Projects/Projects";
import { graphql } from "gatsby";


export default function HomePage({ data }) {
  return (
    <PageLayout>
      <Welcome />
      {/* <Badge color="blue">Badge</Badge> */}
      <SocialMediaBar />
      <Projects data={data} />
    </PageLayout>
  );
}

export const query = graphql`
  query SITE_INDEX_QUERY {
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
  }`;