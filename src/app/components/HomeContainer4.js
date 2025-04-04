"use client";

import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import Image from 'next/image';

export default function FashionCareerSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
     <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 8 } }}>
        <Grid container spacing={2}>
          {/* Left side with overlapping images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: '450px' }}>
              {/* Top-left image */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '290px',
                  height: '190px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  zIndex: 1
                }}
              >
                <Image
                  src="/fashion-designer.png"
                  alt="Mentor and student working together"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Middle-right image - overlaps other images */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: '130px',
                  right: 50,
                  width: '290px',
                  height: '190px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  zIndex: 3
                }}
              >
                <Image
                  src="/fashion-designer.png"
                  alt="Fashion professional working"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Bottom-left image */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  bottom: 30,
                  left: 0,
                  width: '290px',
                  height: '190px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  zIndex: 2
                }}
              >
                <Image
                  src="/fashion-designer.png"
                  alt="Fashion designer sketching"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right side with content */}
          <Grid item xs={12} md={5.4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2, 
                  color: '#333',
                  lineHeight: 1.3
                }}
              >
                Pivoting into fashion, advancing your career, or{' '}
                <Box component="span" sx={{ color: '#97404f', fontWeight: 800, display: 'inline' }}>
                  growing your business?
                </Box>
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, color: '#555', lineHeight: 1.6 }}>
                Take the leap to transform your passion and expertise into remarkable success in the fashion industry.
              </Typography>
              
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#333',
                  color: 'white',
                  borderRadius: '12px',
                  padding: '13px 15px',
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}