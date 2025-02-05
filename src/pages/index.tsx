import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO/SEO';
import { Box, Grid, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { graphql } from "gatsby";
import { Welcome } from '../components/Welcome/Welcome';
import { SocialMediaBar } from '../components/SocialMediaBar/SocialMediaBar';
import { AizawaAttractor } from '../components/AizawaAttractor/AizawaAttractor';
import { ProjectCarousel } from '../components/ProjectCarousel/ProjectCarousel';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { Footer } from '../components/Footer/Footer';

export default function HomePage({ data }) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 1200px)', true); // Initialize with true for SSR
  const textColor = theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7];
  const bgColor = theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white';
  const rightPaneBgColor = theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1];
  const gridColor = theme.colorScheme === 'dark' ? 
    'rgba(255, 255, 255, 0.05)' : 
    'rgba(0, 0, 0, 0.05)';
  const leftPanelRef = useRef<HTMLDivElement>(null);

  // Add visibility:hidden during initial render to prevent layout shift
  const [isInitialRender, setIsInitialRender] = React.useState(true);
  React.useEffect(() => {
    setIsInitialRender(false);
  }, []);

  const projects = data.allMdx.nodes.sort((a, b) => a.frontmatter.sort_id - b.frontmatter.sort_id);

  // Prevent default scroll behavior only in desktop view
  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <div 
        style={{
          visibility: isInitialRender ? 'hidden' : 'visible',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: rightPaneBgColor,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `
          linear-gradient(${gridColor} 0.5px, transparent 0.5px),
          linear-gradient(90deg, ${gridColor} 0.5px, transparent 0.5px)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '10px 10px'
      }}>
        <div style={{
          backgroundColor: bgColor,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          zIndex: 1,
          position: 'relative',
          padding: '0.25rem'
        }}>
          <div style={{
            position: 'relative',
            zIndex: 2,
            color: textColor,
            backdropFilter: 'blur(3px)',
            background: theme.colorScheme === 'dark' ? 
              'rgba(0, 0, 0, 0.1)' : 
              'rgba(255, 255, 255, 0.1)',
            margin: '0.25rem',
            borderRadius: theme.radius.md,
            padding: '0.5rem'
          }}>
            <Welcome />
            <Box mt="0.25rem">
              <SocialMediaBar />
            </Box>
          </div>
        </div>
        <Box style={{ 
          padding: '0 5%',
          margin: '0 auto',
          maxWidth: '1600px',
          position: 'relative',
          marginTop: '2rem'
        }}>
          <Grid 
            grow={true} 
            justify="center"
            gutter="xl"
            style={{
              visibility: isInitialRender ? 'hidden' : 'visible'
            }}
          >
            {projects.map((project) => (
              <Grid.Col key={project.id} span={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ 
                  width: '100%',
                  maxWidth: '400px',
                  display: 'flex', 
                  justifyContent: 'center' 
                }}>
                  <div style={{ width: '100%' }}>
                    <ProjectCard 
                      project={{
                        ...project.frontmatter, 
                        url_override: project.frontmatter.url_override
                      }} 
                      theme={theme}
                    />
                  </div>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: bgColor,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Left side - Personal Info and Attractor */}
        <div 
          ref={leftPanelRef}
          style={{ 
            width: '35%', 
            maxWidth: '500px',
            height: '100%',
            position: 'relative',
            backgroundColor: 'rgba(255, 255, 255)',
            boxShadow: '2px 0 8px rgba(0, 0, 0, 0.08)',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Content overlay */}
          <div style={{
            position: 'absolute',
            zIndex: 2,
            color: textColor,
            backdropFilter: 'blur(3px)',
            background: theme.colorScheme === 'dark' ? 
              'rgba(0, 0, 0, 0.6)' : 
              'rgba(255, 255, 255, 0.6)',
            padding: '2rem',
            borderRadius: theme.radius.md,
            left: '1rem',
            right: '1rem',
            top: '30%',
            transform: 'translateY(-50%)',
            width: 'auto'
          }}>
            <Welcome />
            <Box mt="md">
              <SocialMediaBar />
            </Box>
          </div>

          {/* Attractor container */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <AizawaAttractor 
              color='#000000'
              backgroundColor='#FFFFFF'
            />
          </div>
        </div>

        {/* Right side - Project Cards */}
        <div style={{ 
          width: 'calc(100% - min(35%, 500px))', 
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: rightPaneBgColor,
          backgroundImage: `
            linear-gradient(${gridColor} 0.5px, transparent 0.5px),
            linear-gradient(90deg, ${gridColor} 0.5px, transparent 0.5px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '10px 10px'
        }}>
          <div style={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '2rem'
          }}>
            <ProjectCarousel 
              projects={projects}
              textColor={textColor}
              backgroundColor={rightPaneBgColor}
              scrollRef={leftPanelRef}
              isMobile={isMobile}
            />
          </div>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
          }}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Head = () => <SEO />

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
  }
`;
