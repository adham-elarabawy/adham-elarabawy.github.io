import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Button, Center, Container, Title, Tooltip, rem } from '@mantine/core';
import SocialMediaBar from "../components/SocialMediaBar/SocialMediaBar";
import { Welcome } from "../components/Welcome/Welcome";
import { useClipboard } from "@mantine/hooks";
import { IconCheck, IconCopy } from "@tabler/icons-react";

export default function HomePage() {
  const pdfUrl = '/images/resume.pdf';
  const clipboard = useClipboard();

  return (
    <PageLayout>
      <Container pt={80} size="lg" mb={0} style={{ paddingTop: '20px', paddingBottom: '0px' }}> {/* Adjust padding as needed */}
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
          style={{ width: '800px', height: '500px', border: 'none' }}
          allowFullScreen
        >
          This browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>
        </iframe>
      </Center>
      </Container>
    </PageLayout>
  );
}
