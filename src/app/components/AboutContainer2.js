'use client';

import React from 'react';
import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: '#333333',
      textAlign: 'center',
      marginBottom: '2rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#333333',
      textAlign: 'center',
    },
  },
  palette: {
    background: {
      default: '#f5f5f0',
      paper: '#f5f5f0',
    },
  },
});

export default function OurStory() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Our Story | 99 Yards Academy</title>
        <meta name="description" content="Learn about the story behind 99 Yards Academy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <Box 
        component="section" 
        sx={{ 
          py: { xs: 6, md: 8 },
          backgroundColor: '#EAE4D6', // Light beige/cream background
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1">
            Our story
          </Typography>
          
          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography variant="body1" paragraph>
              At 99 Yards Academy, our mission is to empower fashion entrepreneurs by providing the tools, knowledge, and 
              resources needed to thrive in the industry. The idea for the Academy was born in 2022 when Yevgeniya and Tony 
              Henry, founder of the 99 Yards app and now an advisor for the Academy, joined forces to create a solution that 
              goes beyond education—offering actionable strategies and resources. In late 2023, Manish, a seasoned technical 
              expert with over 20 years of experience, became our technical co-founder, leading all aspects of product 
              development with a focus on quality and scalability.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="body1">
                99 Yards Academy is an innovative platform that combines fashion education with execution tools. It provides 
                aspiring fashion entrepreneurs and professionals with not only expert insights and courses but also access to 
                suppliers, vendors, and resources to help them execute their business strategies. This unique blend of education 
                and practical resources enables users to quickly apply what they learn and scale their businesses effectively.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}