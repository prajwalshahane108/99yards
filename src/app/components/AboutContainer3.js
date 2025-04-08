'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'proxima-nova',
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
      textAlign: 'center',
      color: '#333333',
      marginBottom: '3rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
        marginBottom: '2rem',
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      textAlign: 'center',
      marginTop: '1rem',
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1rem',
      textAlign: 'center',
      color: '#666666',
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 160,
          height: 160,
          border: '2px solid #f5f5f5',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

// Team member data
const teamMembers = [
  {
    name: 'Yevgeniya A. Yushkova',
    role: 'Co-founder and CEO',
    image: '/yushkova.png'
  },
  {
    name: 'Tony Henry',
    role: 'Co-founder',
    image: '/tony.png'
  },
  {
    name: 'Manish Balakrishnan',
    role: 'Co-founder and CTO',
    image: '/manishsir.png'
  },
  {
    name: 'Ariana Cao',
    role: 'CPO',
    image: '/cao.jpg'
  }
];

// Team member component
const TeamMember = ({ name, role, image }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
      <Avatar 
        src={image} 
        alt={name}
        sx={{ 
          width: 160, 
          height: 160,
          border: '2px solid #f5f5f5',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        }}
      />
      <Typography color="#352f36" variant="h5" component="h3">
        {name}
      </Typography>
      <Typography variant="body1" color="#352f36">
        {role}
      </Typography>
    </Box>
  );
};

export default function OurTeam() {
  return (
    <ThemeProvider theme={theme}>
      <Box component="section" sx={{ py: { xs: 6, md: 6 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1">
            Our team
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TeamMember 
                  name={member.name} 
                  role={member.role} 
                  image={member.image} 
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}