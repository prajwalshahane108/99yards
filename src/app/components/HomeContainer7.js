"use client";

import React from 'react';
import { Box, Typography, Button, Container, Divider } from '@mui/material';

export default function FashionJourneyCTA() {
  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Box sx={{ maxWidth: '1000px', mx: 'auto',  }}>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              fontWeight: 400,
              // mb: 1,
              color: '#333',
              lineHeight: 1.6,
              fontSize: '1.1rem'
            }}
          >
            Start your fashion journey with 99 Yards Academy{"'"}s courses designed for all skill levels—Foundational, Expert, and Master. Progress through each stage and master the industry.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mt: 2.5,
              mb: 4,
              color: '#555',
              fontSize: '0.95rem'
            }}
          >
            Get started to receive personalized recommendations from 99 Yards Academy.
          </Typography>
          
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#333',
              color: 'white',
              borderRadius: '10px',
              padding: '14px 13px',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#555',
              }
            }}
          >
            Join waitlist
          </Button>
        </Box>
      </Container>
      <Divider sx={{ borderColor: '#e0e0e0' }} />
    </Box>
  );
}