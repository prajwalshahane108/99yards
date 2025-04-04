"use client";

import React, { useState } from 'react';
import { Box, Typography, Container, Switch, FormGroup, FormControlLabel } from '@mui/material';

export default function PricingHeader() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleBillingChange = (event) => {
    setBillingCycle(event.target.checked ? 'yearly' : 'monthly');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6, textAlign: 'center' }}>
      {/* Main Heading */}
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ 
          fontWeight: 700, 
          mb: 2,
          color: '#333',
          fontSize: { xs: '2rem', md: '2.75rem' }
        }}
      >
        Choose a plan that fits your ambition
      </Typography>
      
      {/* Subheading */}
      <Typography 
        variant="h6" 
        component="p" 
        sx={{ 
          fontWeight: 400, 
          mb: 5,
          color: '#555',
          maxWidth: '800px',
          mx: 'auto',
          fontSize: { xs: '1rem', md: '1.1rem' }
        }}
      >
        Tailor your path to success with a plan that meets your unique goals. Start building your future today.
      </Typography>
      
      {/* Toggle Switch */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Typography 
            sx={{ 
              fontWeight: billingCycle === 'monthly' ? 600 : 400,
              color: billingCycle === 'monthly' ? '#333' : '#777',
              mr: 1
            }}
          >
            Monthly
          </Typography>
          
          <FormControlLabel
            control={
              <Switch 
                checked={billingCycle === 'yearly'}
                onChange={handleBillingChange}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#333',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#555',
                  },
                }}
              />
            }
            label=""
          />
          
          <Typography 
            sx={{ 
              fontWeight: billingCycle === 'yearly' ? 600 : 400,
              color: billingCycle === 'yearly' ? '#333' : '#777',
              ml: 1
            }}
          >
            Yearly
          </Typography>
        </FormGroup>
      </Box>
    </Container>
  );
}