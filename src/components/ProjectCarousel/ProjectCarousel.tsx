import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useMantineTheme } from '@mantine/core';
import { ProjectCard } from '../ProjectCard/ProjectCard';

interface Project {
  id: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    image: string;
    tags: string[];
    url_override?: string;
  };
}

interface ProjectCarouselProps {
  projects: Project[];
  textColor: string;
  backgroundColor: string;
  isMobile?: boolean;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = React.memo(({
  projects,
  textColor,
  backgroundColor,
  isMobile = false
}) => {
  // Memoize constants
  const dimensions = useMemo(() => ({
    CARD_WIDTH: 400,
    CARD_GAP: 32
  }), []);

  const theme = useMantineTheme();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  // Simplified scroll position calculation
  const calculateScrollPosition = useCallback(() => {
    if (!scrollAreaRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollAreaRef.current;
    
    // Check if we're at or very close to the end
    if (Math.abs(scrollLeft + clientWidth - scrollWidth) < 10) {
      return projects.length - 1;
    }
    
    const position = Math.round(scrollLeft / (dimensions.CARD_WIDTH + dimensions.CARD_GAP));
    return Math.min(position, projects.length - 1);
  }, [dimensions, projects.length]);

  const handleScroll = useCallback(() => {
    const newActiveCard = calculateScrollPosition();
    if (newActiveCard !== undefined) {
      setActiveCard(newActiveCard);
    }
  }, [calculateScrollPosition]);

  const handleDotClick = useCallback((index: number) => {
    if (scrollAreaRef.current) {
      const targetScroll = index * (dimensions.CARD_WIDTH + dimensions.CARD_GAP);
      scrollAreaRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setActiveCard(index);
    }
  }, [dimensions]);

  // Memoize the dots array
  const dots = useMemo(() => (
    Array.from({ length: projects.length }, (_, i) => ({
      active: i === activeCard,
      onClick: () => handleDotClick(i)
    }))
  ), [projects.length, activeCard, handleDotClick]);

  useEffect(() => {
    const currentRef = scrollAreaRef.current;
    if (!currentRef) return;

    const resizeObserver = new ResizeObserver(() => {
      setIsScrollable(currentRef.scrollWidth > currentRef.clientWidth);
    });
    
    const wheelHandler = !isMobile ? (e: WheelEvent) => {
      e.preventDefault();
      currentRef.scrollLeft += e.deltaY;
      handleScroll();
    } : null;

    currentRef.addEventListener('scroll', handleScroll);
    resizeObserver.observe(currentRef);
    if (wheelHandler) {
      currentRef.addEventListener('wheel', wheelHandler, { passive: false });
    }

    return () => {
      currentRef.removeEventListener('scroll', handleScroll);
      resizeObserver.unobserve(currentRef);
      if (wheelHandler) {
        currentRef.removeEventListener('wheel', wheelHandler);
      }
    };
  }, [handleScroll, isMobile]);

  return (
    <div style={{ 
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '520px'
      }}>
        <div 
          ref={scrollAreaRef} 
          style={{ 
            width: '100%',
            overflowX: 'auto',
            overflowY: 'hidden',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: `${dimensions.CARD_GAP}px`,
            padding: `0 ${dimensions.CARD_GAP}px`,
            minHeight: '520px',
            width: `${(projects.length * (dimensions.CARD_WIDTH + dimensions.CARD_GAP)) + dimensions.CARD_GAP}px`
          }}>
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{
                  width: `${dimensions.CARD_WIDTH}px`, 
                  flex: 'none',
                  transition: 'opacity 0.3s ease-out',
                  whiteSpace: 'normal'
                }}
              >
                <ProjectCard 
                  project={{
                    ...project.frontmatter, 
                    url_override: project.frontmatter.url_override
                  }} 
                  theme={theme}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem'
      }}>
        <div style={{
          display: 'inline-flex',
          gap: '8px',
          padding: '8px 12px',
          backgroundColor: theme.colorScheme === 'dark' ? 
            'rgba(0, 0, 0, 0.4)' : 
            'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderRadius: '12px',
          border: `1px solid ${
            theme.colorScheme === 'dark' ? 
              'rgba(255, 255, 255, 0.1)' : 
              'rgba(0, 0, 0, 0.1)'
          }`,
          boxShadow: theme.colorScheme === 'dark' ?
            '0 4px 20px rgba(0, 0, 0, 0.3)' :
            '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          {dots.map((dot, index) => (
            <div
              key={index}
              onClick={dot.onClick}
              style={{
                width: dot.active ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: theme.colorScheme === 'dark' ? 
                  (dot.active ? 
                    'linear-gradient(45deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))' : 
                    'rgba(255, 255, 255, 0.2)'
                  ) : 
                  (dot.active ?
                    'linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))' :
                    'rgba(0, 0, 0, 0.2)'
                  ),
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export { ProjectCarousel };
