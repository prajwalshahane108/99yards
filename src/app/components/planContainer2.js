"use client";

import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PricingCards() {
  const pricingPlans = [
    {
      title: "Free",
      price: "$0.00",
      period: "per person/month, billed monthly",
      features: [
        "Personalized lesson plan with access to one course (any combination from Foundational, Expert, or Master categories)",
        "Vendor and resource referrals",
        "In-app purchases for templates and additional resources",
        "High level overview videos for each course"
      ],
      buttonVariant: "contained"
    },
    {
      title: "Starter",
      price: "$39.99",
      period: "per person/month, billed monthly",
      features: [
        "Personalized lesson plan with access to one course (any combination from Foundational, Expert, or Master categories)",
        "Vendor and resource referrals",
        "Project planning tools included",
        "In-app purchases for templates and additional resources"
      ],
      buttonVariant: "contained"
    },
    {
      title: "Professional",
      price: "$89.99",
      period: "per person/month, billed monthly",
      features: [
        "Personalized lesson plan with access to two courses (any combination from Foundational, Expert, or Master categories)",
        "Vendor and resource referrals",
        "Project planning tools included",
        "In-app purchases for templates and additional resources"
      ],
      buttonVariant: "contained"
    },
    {
      title: "All-Access",
      price: "$119.99",
      period: "per person/month, billed monthly",
      features: [
        "Personalized lesson plan with access to unlimited courses (any combination from Foundational, Expert, or Master categories)",
        "Vendor and resource referrals with direct introductions to key industry players",
        "Project planning tools included",
        "Free access to all templates and additional resources"
      ],
      customTitle: "All-Access plan features include:"
    },
    {
      title: "Enterprise",
      price: "$899.90",
      period: "per team/month, billed monthly",
      features: [
        "Access up to 10 users",
        "Administrative project management dashboard to manage team progress"
      ],
      buttonVariant: "contained",
      customTitle: "All-Access plan features plus:"
    }
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: '#f7f5f1', py: 6 }}>
      <Container maxWidth="lg" sx={{ mb: 8 }}>
      <Grid container spacing={2}>
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '8px',
                boxShadow: 'none',
                backgroundColor: '#f9f9f9',
                border: '1px solid #eaeaea',
                overflow: 'visible'
              }}
            >
              <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Plan Title */}
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 1,
                    fontSize: '1.2rem'
                  }}
                >
                  {plan.title}
                </Typography>
                
                {/* Price */}
                <Typography 
                  variant="h4" 
                  component="div" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 0.5,
                    fontSize: '1.8rem'
                  }}
                >
                  {plan.price}
                </Typography>
                
                {/* Billing Period */}
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2,
                    color: '#666',
                    fontSize: '0.75rem'
                  }}
                >
                  {plan.period}
                </Typography>
                
                {/* Get Started Button */}
                <Button 
                  variant={plan.buttonVariant || "contained"}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    backgroundColor: '#333',
                    color: 'white',
                    borderRadius: '4px',
                    textTransform: 'none',
                    fontWeight: 600,
                    py: 1,
                    mb: 3,
                    alignSelf: 'flex-start',
                    '&:hover': {
                      backgroundColor: '#555',
                    }
                  }}
                >
                  Get started
                </Button>
                
                {/* Features Header */}
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 1.5,
                    fontSize: '0.85rem'
                  }}
                >
                  {plan.customTitle || "Key features:"}
                </Typography>
                
                {/* Features List */}
                <Box sx={{ flexGrow: 1 }}>
                  {plan.features.map((feature, idx) => (
                    <Box 
                      key={idx} 
                      sx={{ 
                        display: 'flex',
                        mb: 1.5,
                        alignItems: 'flex-start'
                      }}
                    >
                      <CheckIcon 
                        sx={{ 
                          color: '#333',
                          fontSize: '1rem',
                          mt: 0.2,
                          mr: 1,
                          flexShrink: 0
                        }} 
                      />
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: '#333',
                          fontSize: '0.8rem',
                          lineHeight: 1.5
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
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