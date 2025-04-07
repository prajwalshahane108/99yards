"use client";

import React from 'react';
import { Box, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PricingComparison() {
  const plans = ["Free", "Starter", "Professional", "All-Access", "Enterprise"];
  
  const features = {
    "Learning Experience": [
      { name: "Category overview", included: [true, true, true, true, true] },
      { name: "Lesson preview", included: [true, true, true, true, true] },
      { name: "Personalized lesson plan", included: [true, true, true, true, true] },
      { name: "Exclusive access to new content", included: [false, false, false, true, true] },
      { name: "Unlimited access to all courses", included: [false, false, false, true, true] },
    ],
    "Tool & Resources": [
      { name: "Lesson management tools", included: [false, true, true, true, true] },
      { name: "Vendor referrals", included: [false, true, true, true, true] },
      { name: "In-app purchases", included: [false, true, true, true, true] },
      { name: "Access to essential external resources to enhance your learning", included: [false, true, true, true, true] },
      { name: "Free unlimited access to in-app resources", included: [false, false, false, true, true] },
    ],
    "Adds On (not included in plans)": [
      { name: "Group membership up to 3 people (+ session/month)", price: ["$500.00", "$500.00", "$500.00", "$500.00", "$500.00"] },
      { name: "1:1 mentorship (3 sessions/ month)", price: ["$1,200.00", "$1,200.00", "$1,200.00", "$1,200.00", "$1,200.00"] },
    ]
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ 
          fontWeight: 700, 
          mb: 5,
          textAlign: 'center',
          color: '#333',
        }}
      >
        What&apos;s the difference?
      </Typography>
      
      {/* Plan Headers with Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        {plans.map((plan, index) => (
          <Box 
            key={index} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              px: 1,
              width: '20%'
            }}
          >
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 600, 
                mb: 1,
                textAlign: 'center'
              }}
            >
              {plan}
            </Typography>
            <Button 
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                backgroundColor: '#333',
                color: 'white',
                borderRadius: '4px',
                textTransform: 'none',
                fontWeight: 600,
                py: 0.75,
                px: 1.5,
                fontSize: '0.8rem',
                '&:hover': {
                  backgroundColor: '#555',
                }
              }}
            >
              Get started
            </Button>
          </Box>
        ))}
      </Box>
      
      {/* Feature Comparison Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 'none', mt: 2 }}>
        {Object.entries(features).map(([category, featureList], categoryIndex) => (
          <React.Fragment key={category}>
            {/* Category Header */}
            <TableRow 
              sx={{ 
                backgroundColor: '#f5f5f5',
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell 
                colSpan={6} 
                sx={{ 
                  py: 2,
                  px: 2,
                  borderBottom: '0',
                }}
              >
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#333',
                  }}
                >
                  {category}
                </Typography>
              </TableCell>
            </TableRow>
            
            <Table sx={{ minWidth: 650 }} aria-label="pricing comparison table">
              <TableBody>
                {featureList.map((feature, featureIndex) => (
                  <TableRow
                    key={featureIndex}
                    sx={{ 
                      '&:nth-of-type(odd)': { backgroundColor: '#fafafa' },
                      '&:nth-of-type(even)': { backgroundColor: '#f2f2f2' },
                      '&:last-child td, &:last-child th': { borderBottom: 0 },
                    }}
                  >
                    <TableCell 
                      component="th" 
                      scope="row"
                      sx={{ 
                        borderBottom: 'none',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        width: '30%',
                        pl: 2,
                      }}
                    >
                      {feature.name}
                    </TableCell>
                    
                    {/* Render checkmarks or prices for each plan */}
                    {plans.map((plan, planIndex) => (
                      <TableCell 
                        key={planIndex} 
                        align="center"
                        sx={{ 
                          borderBottom: 'none',
                          width: '14%',
                        }}
                      >
                        {feature.included ? (
                          feature.included[planIndex] ? (
                            <CheckIcon sx={{ color: '#333', fontSize: '1.2rem' }} />
                          ) : null
                        ) : (
                          feature.price && (
                            <Typography variant="body2">
                              {feature.price[planIndex]}
                            </Typography>
                          )
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </React.Fragment>
        ))}
      </TableContainer>
    </Container>
  );
}