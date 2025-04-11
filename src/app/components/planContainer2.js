'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Switch,
  FormGroup,
  FormControlLabel,
  useMediaQuery,
  useTheme
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PlanContainer2({ billingCycle, onBillingChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Modified to use the props instead of local state
  const handleBillingChange = (event) => {
    onBillingChange(event.target.checked ? 'yearly' : 'monthly');
  };

  // Pricing data with both monthly and yearly options
  const pricingPlans = [
    //1
    {
      title: "Free",
      monthly: {
        price: "$0.00",
        period: "per person/month, billed monthly"
      },
      yearly: {
        price: "$0.00",
        period: "per person/month, billed yearly"
      },
      features: [
        "Personalized lesson plan with access to one course (any combination from Foundational, Expert, or Master categories)",
        "Vendor and resource referrals",
        "In-app purchases for templates and additional resources",
        "High level overview videos for each course",
      ],
      buttonVariant: "contained",
    },
    //2
    {
      title: "Starter",
      monthly: {
        price: "$39.99",
        period: "per person/month, billed monthly"
      },
      yearly: {
        price: "$399.90",
        period: "per person/year, billed yearly"
      },
      features: [
        "Personalized lesson plan with access to one course (any combination from Foundational, Expert, or Master categories)",
        "Vendor and resource referrals",
        "Project planning tools included",
        "In-app purchases for templates and additional resources",
      ],
      buttonVariant: "contained",
    },
    //3
    {
      title: " Professional",
      monthly: {
        price: "$89.99",
        period: " per person/month, billed monthly"
      },
      yearly: {
        price: "$899.90",
        period: "per person/year, billed yearly"
      },
      features: [
        "Personalized lesson plan with access to two courses (any combination from Foundational, Expert, or Master categories)",
        "Vendor and resource referrals",
        " Project planning tools included",
        "In-app purchases for templates and additional resources",
      ],
      buttonVariant: "contained",
    },
    //4
    {
      title: " All-Access",
      monthly: {
        price: "$119.99",
        period: " per person/month, billed monthly"
      },
      yearly: {
        price: "$1,199.90",
        period: "per person/year, billed yearly"
      },
      features: [
        "Personalized lesson plan with access to one course (any combination from Foundational, Expert, or Master categories)",
        " Vendor and resource referrals with direct introductions to key industry players",
        "Project planning tools included",
        "Free access to all templates and additional resources",
      ],
      buttonVariant: "contained",
    },
    //5
    {
      title: "Enterprise",
      monthly: {
        price: " $899.90",
        period: "per person/month, billed monthly"
      },
      yearly: {
        price: "$10,798.80",
        period: "per person/year, billed yearly"
      },
      features: [
        "Access up to 10 users",
        "Administrative project management dashboard to manage team progress",
      ],
      buttonVariant: "contained",
    },  
    // Other plans...
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#f7f5f1" }}>
      {/* Pricing Header */}
      <Container
        maxWidth="xl"
        sx={{
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 10 },
          py: { xs: 4, sm: 5, md: 6 },
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Main Heading */}
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 700, 
            mb: 1,
            color: '#352f36',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' }
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
            mb: { xs: 3, md: 5 },
            color: '#352f36',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
          }}
        >
          Tailor your path to success with a plan that meets your unique goals. Start building your future today.
        </Typography>
        
        {/* Toggle Switch - now uses props */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
          <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography 
              sx={{ 
                fontWeight: billingCycle === 'monthly' ? 600 : 400,
                color: billingCycle === 'monthly' ? '#352f36' : '#777',
                mr: 1,
                fontSize: { xs: '0.9rem', md: '1rem' }
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
                color: billingCycle === 'yearly' ? '#352f36' : '#777',
                ml: 1,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Yearly
            </Typography>
          </FormGroup>
        </Box>
      </Container>

      {/* Pricing Cards */}
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 1, sm: 2, md: 3 },
          py: { xs: 2, sm: 3, md: 4 },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }}>
          {pricingPlans.map((plan, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={2.4}
              key={plan.title} // Changed to use title for better readability
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: { xs: "12px", md: "20px" },
                  boxShadow: "none",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  overflow: "hidden",
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: "20px 16px", sm: "30px 20px", md: "40px 32px" },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Plan Title */}
                  <Typography
                    variant="h6"
                    component="h3"
                    className="bold-text"
                    sx={{
                      color: "#352f36",
                      fontWeight: 900,
                      mb: 1,
                      fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.9rem" },
                    }}
                  >
                    {plan.title}
                  </Typography>

                  {/* Price - using the billingCycle prop */}
                  <Typography
                    variant="h4"
                    component="div"
                    className="bold-text"
                    sx={{
                      fontWeight: 900,
                      mb: 0.5,
                      fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.9rem" },
                      color: "#352f36",
                    }}
                  >
                    {billingCycle === 'monthly' ? plan.monthly.price : plan.yearly.price}
                  </Typography>

                  {/* Billing Period - using the billingCycle prop */}
                  <Typography
                    variant="body2"
                    sx={{
                      mb: { xs: 2, md: 3 },
                      mt: { xs: 1, md: 3 },
                      color: "#352f36",
                      fontSize: { xs: "0.8rem", md: "0.9rem" },
                      fontWeight: 400,
                      minHeight: { xs: "auto", sm: "40px" },
                    }}
                  >
                    {billingCycle === 'monthly' ? plan.monthly.period : plan.yearly.period}
                  </Typography>

                  {/* Get Started Button */}
                  <Box sx={{ mb: { xs: 2, md: 3 } }}>
                    <Button
                      variant={plan.buttonVariant || "contained"}
                      endIcon={<ArrowForwardIosIcon fontSize="small" />}
                      sx={{
                        width: "100%",
                        backgroundColor: "#352f36",
                        color: "white",
                        borderRadius: { xs: "8px", md: "12px" },
                        textTransform: "none",
                        fontWeight: 600,
                        py: { xs: 1.5, md: 2 },
                        px: { xs: 2, md: 4 },
                        justifyContent: "space-between",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: "#555",
                        },
                        fontSize: { xs: "0.85rem", md: "0.9rem" },
                      }}
                    >
                      Get started
                    </Button>
                  </Box>

                  {/* Features Header */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "#352f36",
                    }}
                  >
                    {index == 4 ? "All-Access plan features plus:" : "Key features:"}
                  </Typography>

                  {/* Features List */}
                  <Box sx={{ flexGrow: 1 }}>
                    {plan.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          mb: { xs: 1, md: 1.5 },
                          alignItems: "flex-start",
                        }}
                      >
                        <CheckIcon
                          sx={{
                            color: "#333",
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            mt: 0.2,
                            mr: 1,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#352f36",
                            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                            lineHeight: 1.5,
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