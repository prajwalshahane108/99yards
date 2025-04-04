"use client";

import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat egestas finibus ultrices donec phasellus praesent ipsum blandit sociosqu.",
      name: "Name",
      title: "Job Title at Company"
    },
    {
      quote: "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat egestas finibus ultrices donec phasellus praesent ipsum blandit sociosqu.",
      name: "Name",
      title: "Job Title at Company"
    },
    {
      quote: "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat egestas finibus ultrices donec phasellus praesent ipsum blandit sociosqu.",
      name: "Name",
      title: "Job Title at Company"
    }
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: '#2d2b2e' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 4 } }}>
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            fontWeight: 700, 
            mb: 5,
            color: 'white',
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.75rem' }
          }}
        >
          Discover How 99 Yards Academy Changed Their Lives
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: '8px',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4, 
                      color: '#333',
                      fontStyle: 'italic'
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                      sx={{ 
                        width: 56, 
                        height: 56, 
                        bgcolor: '#e0e0e0',
                        mr: 2
                      }}
                    />
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 600,
                          color: '#333'
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#555'
                        }}
                      >
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}