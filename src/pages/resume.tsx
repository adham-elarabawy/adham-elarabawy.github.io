import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Button, Center, Container, Title, Tooltip, rem, Box, useMantineTheme, Text } from '@mantine/core';
import SocialMediaBar from "../components/SocialMediaBar/SocialMediaBar";
import { Welcome } from "../components/Welcome/Welcome";
import { useClipboard } from "@mantine/hooks";
import { IconCheck, IconCopy, IconArrowLeft } from "@tabler/icons-react";
import { Link } from 'gatsby';

export default function HomePage() {
  const theme = useMantineTheme();
  const pdfUrl = '/images/resume.pdf';
  const clipboard = useClipboard();
  
  const bgColor = theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0];
  const rightPaneBgColor = theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1];
  const gridColor = theme.colorScheme === 'dark' ? 
    'rgba(255, 255, 255, 0.05)' : 
    'rgba(0, 0, 0, 0.05)';

  return (
    <div style={{
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
        <Box 
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            gap: '1rem',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                variant="light"
                leftSection={<IconArrowLeft size={16} />}
                size="sm"
                color="blue"
              >
                Go to Homepage
              </Button>
            </Link>
          </div>
          <Text size="sm" color="dimmed" style={{ fontStyle: 'italic' }}>
            Direct access resume page
          </Text>
        </Box>
      </div>
      <Box style={{ padding: '20px 40px' }}>
      <Box style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <Center>
      <Tooltip
      label="Link copied!"
      offset={5}
      position="bottom"
      radius="xl"
      transitionProps={{ duration: 100, transition: 'slide-down' }}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        rightSection={
          clipboard.copied ? (
            <IconCheck style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          ) : (
            <IconCopy style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          )
        }
        radius="xl"
        size="sm"
        color="blue"
        styles={{
          root: { paddingRight: rem(14), height: rem(48) },
          section: { marginLeft: rem(22) },
        }}
        onClick={() => clipboard.copy('https://www.adhamelarabawy.com/resume')}
      >
        Copy resume link to clipboard
      </Button>
    </Tooltip>
    </Center>
      <Center pt={20}>
        <iframe
          src={pdfUrl}
          style={{
            width: '100%',
            height: '85vh',
            border: 'none',
            borderRadius: theme.radius.md,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            maxWidth: '1400px',
            margin: '0 auto',
            aspectRatio: '8.5/11'
          }}
          allowFullScreen
        >
          This browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>
        </iframe>
      </Center>
      </Box>
      </Box>
    </div>
  );
}
