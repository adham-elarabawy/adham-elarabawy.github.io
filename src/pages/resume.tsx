import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Container } from '@mantine/core';

export default function HomePage() {
  const pdfUrl = '/images/resume.pdf';

  return (
    <PageLayout>
      <Container mt={100} size="lg" style={{ paddingTop: '20px', paddingBottom: '20px' }}> {/* Adjust padding as needed */}
        <iframe
          src={pdfUrl}
          style={{ width: '100%', height: '500px', border: 'none' }}
          frameBorder="0"
          allowFullScreen
        >
          This browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>
        </iframe>
      </Container>
    </PageLayout>
  );
}
