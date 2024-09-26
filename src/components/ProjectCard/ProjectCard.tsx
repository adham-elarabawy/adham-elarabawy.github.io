import React from "react";
import { Card, Text, Badge, Group, Container, Center, Flex, Divider } from "@mantine/core";
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

const typeColors = {
  paper: "blue",
  robotics: "grape",
  github: "gray",
  "machine learning": "green",
};

const stateColors = {
  "in-progress": "yellow",
  maintained: "blue",
  done: "green",
};

export function ProjectCard({ project }) {
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <Container>
      <Center>
        <GatsbyLink to={project.slug} style={{ textDecoration: 'none' }}>
          <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
              <CroppedImage src={project.featured_image} alt="Description" />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <div style={{ position: 'relative' }}>
                {project.state && (
                  <Flex align="center" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: stateColors[project.state],
                        marginRight: '6px',
                      }}
                    />
                    <Text size="xs" color="dimmed">
                      {project.state.charAt(0).toUpperCase() + project.state.slice(1)}
                    </Text>
                  </Flex>
                )}
                <Text fz="lg" fw={500}>
                  {project.title}
                </Text>
                <Text fz="xs" c="dimmed" style={{ fontWeight: 300, marginTop: '4px' }}>
                  {formattedDate}
                </Text>
              </div>
              <Group mt="xs">
                {project.type && Array.isArray(project.type) && project.type.map((type, index) => (
                  <Badge key={index} size="sm" variant="light" color={typeColors[type] || "gray"}>
                    {type}
                  </Badge>
                ))}
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
