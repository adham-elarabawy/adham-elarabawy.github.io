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
  width: '102%', // Slightly wider than the container
  height: '102%', // Slightly taller than the container
  objectFit: 'cover',
  objectPosition: 'center',
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
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // Invalid date, return original string or a placeholder
      return dateString || 'No date';
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };
  console.log('adham')
  console.log(project.date)
  const formattedDate = formatDate(project.date);

  const CardWrapper = ({ children }) => {
    if (project.url_override) {
      return (
        <a href={project.url_override} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          {children}
        </a>
      );
    }
    return <GatsbyLink to={project.slug} style={{ textDecoration: 'none' }}>{children}</GatsbyLink>;
  };

  return (
    <Container>
      <Center>
        <CardWrapper>
          <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
              <CroppedImage src={project.featured_image} alt="Description" />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <div style={{ position: 'relative' }}>
                {project.state && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      backgroundColor: `var(--mantine-color-${stateColors[project.state]}-light)`,
                      padding: '4px 8px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: `var(--mantine-color-${stateColors[project.state]}-filled)`,
                        marginRight: '6px',
                      }}
                    />
                    <Text size="xs">
                      {project.state.charAt(0).toUpperCase() + project.state.slice(1)}
                    </Text>
                  </div>
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
              <div className={classes.descriptionContainer}>
                <Text fz="sm" className={classes.description}>
                  {project.description}
                </Text>
              </div>
            </Card.Section>
          </Card>
        </CardWrapper>
      </Center>
    </Container>
  );
}



