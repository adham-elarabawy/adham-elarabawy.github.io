import React from "react";
import { Card, Text, Badge, Group, Container, Center } from "@mantine/core";
import { Link as GatsbyLink } from "gatsby";
import * as classes from './ProjectCard.module.css';

const imageContainerStyle = {
  width: '100%',
  height: '300px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  width: '100%',
};

const CroppedImage = ({ src, alt }) => (
  <div style={imageContainerStyle}>
    <img src={src} alt={alt} style={imageStyle} />
  </div>
);

export function ProjectCard({ project }) {
  return (
    <Container>
      <Center>
        <GatsbyLink to={project.slug} style={{ textDecoration: 'none' }}>
          <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
              <CroppedImage src={project.featured_image} alt="Description" />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {project.title}
                </Text>
                <Badge size="sm" variant="light">
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </Badge>
              </Group>
              <Text fz="sm" mt="xs">
                {project.description}
              </Text>
            </Card.Section>
          </Card>
        </GatsbyLink>
      </Center>
    </Container>
  );
}