import React from "react";
import { Card, Text, Button, Badge, Group, ActionIcon, Container, Center } from "@mantine/core";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { IconHeart } from '@tabler/icons-react';
import * as classes from './ProjectCard.module.css';

const imageContainerStyle = {
  width: '100%', // Ensure the container takes full width of its parent
  height: '300px', // Fixed height for the cropping effect
  overflow: 'hidden', // Hide the parts of the image that exceed the container's dimensions
  display: 'flex', // Use flexbox to center the image vertically
  justifyContent: 'center', // Center the image horizontally
  alignItems: 'center', // Center the image vertically
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
        <Card withBorder radius="md" p="md" className={classes.card}>
          {/* Image Section */}
          <Card.Section>
            {/* <img src={project.featured_image} height={180} alt="Description" /> */}
            <CroppedImage src={project.featured_image} alt="Description" />
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group justify="apart">
              <Text fz="lg" fw={500}>
                {project.title}
              </Text>
              <Badge size="sm" variant="light">
                {project.date}
              </Badge>
            </Group>
            <Text fz="sm" mt="xs">
              {project.description}
            </Text>
          </Card.Section>

          <Group mt="xs">
            <Button radius="md" style={{ flex: 1 }} component={GatsbyLink} to={project.slug}>
              Open Project
            </Button>
          </Group>
        </Card>
      </Center>
    </Container>
  );
}
