'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Checkbox, 
  FormControlLabel, 
  Button, 
  Paper, 
  Grid,
  Link
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h5: {
      fontWeight: 400,
      fontSize: '1.25rem',
      textAlign: 'center',
      color: '#333333',
      marginBottom: '2rem',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#777777',
      textAlign: 'center',
    },
  },
  palette: {
    background: {
      default: '#f5f5f0',
    },
    primary: {
      main: '#333333',
    },
    text: {
      primary: '#333333',
      secondary: '#777777',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '8px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '& fieldset': {
              borderColor: '#e0e0e0',
            },
            '&:hover fieldset': {
              borderColor: '#cccccc',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#999999',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '10px 24px',
          textTransform: 'none',
          fontWeight: 500,
          backgroundColor: '#333333',
          '&:hover': {
            backgroundColor: '#222222',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '0 9px 0 0',
          color: '#999999',
          '&.Mui-checked': {
            color: '#333333',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
        label: {
          fontSize: '0.9rem',
          color: '#333333',
        },
      },
    },
  },
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'agreeToTerms' ? checked : value
    });
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Privacy Policy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Form submitted:', formData);
      // Add actual submission logic here
      // Reset form or show success message
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
        component="section" 
        sx={{ 
          py: { xs: 6, md: 8 },
          backgroundColor: '#f5f5f0', // Light beige background
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h5" component="h4" sx={{ fontWeight: 200, color: '#352F36' }}>
            Leave us a message.
          </Typography>
          
          <Paper 
            elevation={0}
            sx={{ 
              maxWidth: '100%',
              p: { xs: 3, md: 5 },
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '800px',
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* First Name */}
                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ fontWeight: 400 }}>
                    First Name:*
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    fullWidth
                    placeholder="Text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    InputProps={{
                      sx: { 
                        borderRadius: '8px',
                        backgroundColor: 'white'
                      }
                    }}
                    size="small"
                  />
                </Grid>
                
                {/* Last Name */}
                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ fontWeight: 400 }}>
                    Last Name:*
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    fullWidth
                    placeholder="Text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    InputProps={{
                      sx: { 
                        borderRadius: '8px',
                        backgroundColor: 'white'
                      }
                    }}
                    size="small"
                  />
                </Grid>
                
                {/* Email */}
                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ fontWeight: 400 }}>
                    Email:*
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    fullWidth
                    placeholder="Text"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{
                      sx: { 
                        borderRadius: '8px', 
                        backgroundColor: 'white'
                      }
                    }}
                    size="small"
                  />
                </Grid>
                
                {/* Message */}
                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'flex-start', pt: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 400 }}>
                    Email:*
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    InputProps={{
                      sx: { 
                        borderRadius: '8px',
                        backgroundColor: 'white'
                      }
                    }}
                  />
                </Grid>
                
                {/* Checkbox for agreement */}
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start',  ml: { xs: 0, sm: '25%' }, mt: 1 }}>
                    <Checkbox 
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      sx={{ padding: '0 9px 0 0', 
                        borderRadius: '12px',

                       }}
                    />
                    <Typography variant="body2" sx={{ 
                      color: errors.agreeToTerms ? 'error.main' : 'text.primary',
                      fontSize: '0.9rem', 
                      mt: 0.2,
                      textAlign: 'left',
                      maxWidth: '90%',
                    }}>
                      By checking the box and clicking "Submit", you are agreeing to 99 Yards Academy's <Link href="/privacy" color="inherit" sx={{ fontWeight: 500 }}>Privacy Policy</Link>.*
                    </Typography>
                  </Box>
                </Grid>
                
                {/* Submit Button */}
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', ml: { xs: 0, sm: '25%' }, mt: 1 }}>
                    <Button 
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ 
                        padding: '13px 15px',
                        maxWidth: '95px',
                        bgcolor: '#352F36',
                        fontWeight: 400,
                        '&:hover': {
                          bgcolor: '#222222'
                        },
                        borderRadius: '12px',
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            
            {/* Required fields note */}
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Fields marked with an asterisk (*) are required.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}