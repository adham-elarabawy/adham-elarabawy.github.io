import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Center, Container } from '@mantine/core';

export default function HomePage() {
  const pdfUrl = '/images/resume.pdf';

  return (
    <PageLayout>
      <Container mt={100} size="lg" mb={0} style={{ paddingTop: '20px', paddingBottom: '0px' }}> {/* Adjust padding as needed */}
      <Center>
        <iframe
          src={pdfUrl}
          style={{ width: '800px', height: '500px', border: 'none' }}
          frameBorder="0"
          allowFullScreen
        >
          This browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>
        </iframe>
      </Center>
      </Container>
    </PageLayout>
  );
}
