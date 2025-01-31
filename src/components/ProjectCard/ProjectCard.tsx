import React from "react";
import { Card, Text, Badge, Group, Center, Flex, Divider } from "@mantine/core";
import { Link as GatsbyLink } from "gatsby";
import { DefaultMantineColor } from '@mantine/core';
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


export const typeColors: Record<string, DefaultMantineColor> = {
  robotics: '#9775fa',
  nlp: '#ff8787',
  "machine learning": '#20c997',
  paper: 'blue',
  github: 'gray',
};

const stateColors = {
  "in-progress": "yellow",
  maintained: "blue",
  done: "green",
};

export function ProjectCard({ project, theme }) {
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
    <CardWrapper>
      <Card withBorder radius="md" p={0} className={classes.card} style={{
        backgroundColor: 'transparent',
        overflow: 'hidden',
        border: `1px solid ${theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'}`
      }}>
        <div style={{ height: '300px' }}>
          <CroppedImage src={project.featured_image} alt={project.title} />
        </div>
        
        <div className={classes.section} style={{
          background: theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxShadow: theme.colorScheme === 'dark' ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' : 'inset 0 1px 0 0 rgba(255, 255, 255, 0.9)',
          position: 'relative'
        }}>
          {project.state && (
            <Badge
              variant="dot"
              size="sm"
              color={stateColors[project.state]}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                textTransform: 'lowercase',
                fontFamily: 'monospace',
                letterSpacing: '-0.02em',
                backdropFilter: 'blur(8px)',
                backgroundColor: theme.colorScheme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                border: `1px solid ${theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`
              }}
            >
              {project.state}
            </Badge>
          )}
          <Group position="apart" mb={4}>
            <Text size="lg" weight={900} style={{
              letterSpacing: '-0.01em',
              color: theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)'
            }}>
              {project.title}
            </Text>
          </Group>

          <Text size="xs" mb="xs" style={{
            fontFamily: 'monospace',
            color: theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
            letterSpacing: '-0.02em'
          }}>
            {new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit'
            }).replace(/\//g, '.')}
          </Text>

          <div className={classes.descriptionContainer}>
            <Text className={classes.description} style={{
              color: theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
              fontSize: '0.9rem',
              lineHeight: '1.4'
            }}>
              {project.description}
            </Text>
          </div>

          <Group spacing={8} mt="auto">
            {project.type && Array.isArray(project.type) && project.type.map((type, index) => (
              <Badge
                key={index}
                variant="light"
                radius="sm"
                size="sm"
                style={{
                  backgroundColor: `${typeColors[type]}15`,
                  color: typeColors[type],
                  border: `1px solid ${typeColors[type]}30`,
                  textTransform: 'lowercase',
                  fontFamily: 'monospace',
                  letterSpacing: '-0.02em'
                }}
              >
                {type}
              </Badge>
            ))}
          </Group>
        </div>
      </Card>
    </CardWrapper>
  );
}
