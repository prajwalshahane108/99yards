// HelpCenter.js
'use client';
import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  InputBase,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
    h2: {
      fontWeight: 500,
      fontSize: '2.5rem',
      textAlign: 'center'
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    }
  },
  palette: {
    background: {
      default: '#f5f5f5'
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24
        }
      }
    }
  }
});

// Logo component
const YardsLogo = () => (
  <svg width="60" height="60" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="50" fill="#f0ebe0"/>
    <g fill="#333">
      <path d="M35,40 C35,30 45,25 50,25 C55,25 65,30 65,40 C65,50 55,70 50,70 C45,70 35,50 35,40 Z"/>
      <path d="M50,70 C50,75 60,75 60,65 C60,60 55,50 50,50"/>
    </g>
  </svg>
);

// Help category card component
const HelpCategoryCard = ({ icon, title, description }) => (
  <Card 
    sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      cursor: 'pointer'
    }}
  >
    <CardContent sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      p: 4, 
      textAlign: 'center',
      width: '100%' 
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        mb: 2.5
      }}>
        <Avatar 
          sx={{ 
            width: 80, 
            height: 80, 
            bgcolor: '#f0ebe0',
            color: 'black'
          }}
        >
          {icon}
        </Avatar>
      </Box>
      <Typography 
        variant="h5" 
        component="h3" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          mb: 1
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body1" 
        color="text.secondary"
        sx={{
          fontSize: '0.95rem',
          lineHeight: 1.5
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const HelpCenter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'white', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            pt: 8,
            pb: 4
          }}>
            <Typography variant="h2" component="h1" gutterBottom>
              How may we help you?
            </Typography>
            
            {/* Search Box */}
            <Paper 
              sx={{ 
                p: '2px 4px', 
                display: 'flex', 
                alignItems: 'center', 
                width: '100%',
                maxWidth: 450,
                mt: 3,
                mb: 3,
                border: '1px solid #eaeaea',
                borderRadius: 50,
                pl: 2,
                boxShadow: 'none'
              }}
            >
              <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
              <InputBase
                sx={{ ml: 1, flex: 1, py: 1 }}
                placeholder="Search for help"
                inputProps={{ 'aria-label': 'search for help' }}
              />
            </Paper>
          </Box>
        </Container>
        
        {/* Help Categories */}
        <Box sx={{ 
          py: 5, 
          bgcolor: '#f5f5f5', 
          width: '100%',
          pb: 8
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <HelpCategoryCard 
                  icon={<YardsLogo />}
                  title="Getting Started"
                  description="Learning how 99 Yards Academy works and how to start learning."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <HelpCategoryCard 
                  icon={<PersonIcon sx={{ fontSize: 40 }} />}
                  title="Account/Profile"
                  description="Manage your account settings."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <HelpCategoryCard 
                  icon={<YardsLogo />}
                  title="Getting Started"
                  description="Learning how 99 Yards Academy works and how to start learning."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <HelpCategoryCard 
                  icon={<ShoppingCartIcon sx={{ fontSize: 40 }} />}
                  title="Purchase/Refunds"
                  description="Learn about purchasing courses, templates, refunds."
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HelpCenter;