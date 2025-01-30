import React, { useRef, useEffect, useState } from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { PageLayout } from "../components/PageLayout";
import { Box, createStyles, Grid, Container, Text } from '@mantine/core';
import SocialMediaBar from "../components/SocialMediaBar/SocialMediaBar";
import { graphql } from "gatsby";
import AizawaAttractor from "../components/AizawaAttractor/AizawaAttractor";
import { useMantineTheme } from "@mantine/core";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { useMediaQuery } from '@mantine/hooks';

export default function HomePage({ data }) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 1200px)');
  const [isScrollable, setIsScrollable] = useState(false);
  const textColor = theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[7];
  const bgColor = theme.colorScheme === 'dark' ? '#1A1A1A' : '#FFFFFF';
  const scrollAreaRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const projects = data.allMdx.nodes.sort((a, b) => a.frontmatter.sort_id - b.frontmatter.sort_id);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isMobile && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        const scrollAmount = e.deltaY * 0.5;
        scrollAreaRef.current?.scrollBy({
          left: scrollAmount,
          behavior: 'auto'
        });
      }
    };

    const updateCardVisibility = () => {
      if (!scrollAreaRef.current || isMobile) return;
      const cards = scrollAreaRef.current.querySelectorAll('.project-card');
      const containerRect = scrollAreaRef.current.getBoundingClientRect();
      
      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const distanceFromCenter = Math.abs((cardRect.left + cardRect.width / 2) - (containerRect.left + containerRect.width / 2));
        const maxDistance = containerRect.width / 2 + cardRect.width / 2;
        const opacity = Math.max(0.3, Math.pow(1 - (distanceFromCenter / maxDistance), 0.5));
        
        card.style.opacity = opacity;
      });
    };

    const checkScrollable = () => {
      if (scrollAreaRef.current) {
        const { scrollWidth, clientWidth } = scrollAreaRef.current;
        setIsScrollable(scrollWidth > clientWidth);
      }
    };

    const handleScroll = () => {
      if (scrollAreaRef.current) {
        const cardWidth = 500 + 32; // card width + margin
        const scrollPosition = scrollAreaRef.current.scrollLeft;
        const maxScroll = scrollAreaRef.current.scrollWidth - scrollAreaRef.current.clientWidth;
        
        // If we're very close to the end, select the last card
        if (maxScroll - scrollPosition < 20) {
          setActiveCard(projects.length - 1);
        } else {
          const newCard = Math.round(scrollPosition / cardWidth);
          if (newCard !== activeCard) {
            setActiveCard(newCard);
          }
        }
      }
    };

    checkScrollable();
    document.addEventListener('wheel', handleWheel, { passive: false });
    scrollAreaRef.current?.addEventListener('scroll', updateCardVisibility);
    scrollAreaRef.current?.addEventListener('scroll', handleScroll);
    updateCardVisibility();
    window.addEventListener('resize', checkScrollable);
    return () => {
      document.removeEventListener('wheel', handleWheel);
      scrollAreaRef.current?.removeEventListener('scroll', updateCardVisibility);
      scrollAreaRef.current?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollable);
    };
  }, [isMobile, activeCard, projects.length]);

  const handleDotClick = (index: number) => {
    if (scrollAreaRef.current) {
      const cardWidth = 500 + 32; // card width + margin
      scrollAreaRef.current.scrollLeft = index * cardWidth;
    }
  };

  if (isMobile) {
    return (
      <div style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container size="md" px="md" style={{ width: '100%' }}>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
            padding: '1rem 0'
          }}>
            {/* Name Card */}
            <div style={{
              color: textColor,
              backdropFilter: 'blur(10px)',
              background: theme.colorScheme === 'dark' ? 
                'rgba(0, 0, 0, 0.05)' : 
                'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: theme.radius.md,
              width: '100%',
              maxWidth: '600px'
            }}>
              <Welcome />
              <Box mt="md">
                <SocialMediaBar />
              </Box>
            </div>

            {/* Project Cards Grid */}
            <Grid gutter="xl" style={{ width: '100%' }} justify="center">
              {projects.map((project) => (
                <Grid.Col key={project.id} span={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ width: '100%', maxWidth: '500px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%' }}>
                      <ProjectCard 
                        project={{
                          ...project.frontmatter, 
                          url_override: project.frontmatter.url_override
                        }} 
                      />
                    </div>
                  </Box>
                </Grid.Col>
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0,
      overflow: 'hidden'
    }}>
      <div style={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
      }}>
        {/* Left side - Personal Info and Attractor */}
        <div style={{ 
          width: '35%', 
          height: '100%',
          position: 'relative',
          padding: '1rem',
        }}>
          {/* Content overlay */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            color: textColor,
            backdropFilter: 'blur(10px)',
            background: theme.colorScheme === 'dark' ? 
              'rgba(0, 0, 0, 0.1)' : 
              'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: theme.radius.md,
            marginTop: '0rem',
          }}>
            <Welcome />
            <Box mt="md">
              <SocialMediaBar />
            </Box>
          </div>

          {/* Attractor as background */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '70vh',
            zIndex: 0
          }}>
            <AizawaAttractor 
              color={textColor} 
              backgroundColor={bgColor}
            />
          </div>
        </div>

        {/* Right side - Projects */}
        <div style={{ 
          width: '65%',
          height: '100%',
          position: 'relative',
          backgroundColor: bgColor,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div ref={scrollAreaRef} style={{ 
            width: '100%',
            height: 'calc(100% - 30px)', // Make room for dot indicators
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
            <div style={{
              display: 'inline-flex',
              height: '100%',
              alignItems: 'center',
              paddingLeft: '2rem',
              paddingRight: '2rem'
            }}>
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  style={{
                    width: '500px',
                    flex: 'none',
                    transition: 'opacity 0.3s ease-out',
                    marginRight: '2rem',
                  }}
                >
                  <ProjectCard 
                    project={{
                      ...project.frontmatter, 
                      url_override: project.frontmatter.url_override
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Simple dot indicators */}
          <div style={{
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px'
          }}>
            {projects.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: index === activeCard ? textColor : theme.colorScheme === 'dark' ? '#444' : '#ddd',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  opacity: index === activeCard ? 1 : 0.5,
                  transform: index === activeCard ? 'scale(1.2)' : 'scale(1)'
                }}
              />
            ))}
          </div>
          {/* Scroll indicator */}
          {isScrollable && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: 0,
              height: '100%',
              width: '100px',
              background: theme.colorScheme === 'dark' 
                ? 'linear-gradient(90deg, rgba(26, 26, 26, 0), rgba(26, 26, 26, 0.8))'
                : 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8))',
              pointerEvents: 'none',
              zIndex: 10
            }} />
          )}
        </div>
      </div>
    </div>
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
  }
`;
