"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  useMediaQuery,
  Tabs,
  Tab,
  IconButton,
  Grid,
  Card,
  CardContent,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PlanContainer3({ billingCycle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [selectedPlan, setSelectedPlan] = useState(0);

  const plans = ["Free", "Starter", "Professional", "All-Access", "Enterprise"];

  // Features for monthly billing
  const monthlyFeatures = {
    "Learning Experience": [
      { name: "Category overview", included: [true, true, true, true, true] },
      { name: "Lesson preview", included: [true, true, true, true, true] },
      {
        name: "Personalized lesson plan",
        included: [true, true, true, true, true],
      },
      {
        name: "Exclusive access to new content",
        included: [false, false, false, true, true],
      },
      {
        name: "Unlimited access to all courses",
        included: [false, false, false, true, true],
      },
    ],
    "Tool & Resources": [
      {
        name: "Lesson management tools",
        included: [false, true, true, true, true],
      },
      { name: "Vendor referrals", included: [false, true, true, true, true] },
      { name: "In-app purchases", included: [false, true, true, true, true] },
      {
        name: "Access to essential external resources to enhance your learning",
        included: [false, true, true, true, true],
      },
      {
        name: "Free unlimited access to in-app resources",
        included: [false, false, false, true, true],
      },
    ],
    "Adds On (not included in plans)": [
      {
        name: "Group mentorship up to 3 people (4 sessions/month)",
        price: ["$600.00", "$600.00", "$600.00", "$600.00", "$600.00"],
      },
      {
        name: "1:1 mentorship (3 sessions/ month)",
        price: [
          "$1,200.00",
          "$1,200.00",
          "$1,200.00",
          "$1,200.00",
          "$1,200.00",
        ],
      },
    ],
  };

  // Features for yearly billing - example with some differences
  const yearlyFeatures = {
    "Learning Experience": [
      { name: "Category overview", included: [true, true, true, true, true] },
      { name: "Lesson preview", included: [true, true, true, true, true] },
      {
        name: "Personalized lesson plan",
        included: [false, true, true, true, true],
      },
      {
        name: "Exclusive access to new content",
        included: [false, false, false, true, true], // Yearly bonus - Starter gets this too
      },
      {
        name: "Unlimited access to all courses",
        included: [false, false, false, true, true], // Yearly bonus - Professional gets this too
      },
    ],
    "Tool & Resources": [
      {
        name: "Lesson management tools",
        included: [false, true, true, true, true], // Yearly bonus - Free gets this
      },
      { name: "Vendor referrals", included: [false, true, true, true, true] }, // Yearly bonus - Free gets this
      { name: "In-app purchases", included: [false, true, true, true, true] },
      {
        name: "Access to essential external resources to enhance your learning",
        included: [false, true, true, true, true],
      },
      {
        name: "Free unlimited access to in-app resources",
        included: [false, false, false, true, true], // Yearly bonus - Professional gets this
      },
    ],
    "Adds On (not included in plans)": [
      {
        name: "Group mentorship up to 3 people",
        price: ["$6000.00", "$6000.00", "$6000.00", "$6000.00", "$6000.00"], // Yearly discount
      },
      {
        name: "1:1 mentorship (3 sessions/ month)",
        price: [
          "$12000.00",
          "$12000.00",
          "$12000.00",
          "$12000.00",
          "$12000.00",
        ], // Yearly discount
      },
    ],
  };

  // Use the appropriate features based on billing cycle
  const features = billingCycle === 'monthly' ? monthlyFeatures : yearlyFeatures;
  
  const handleChange = (event, newValue) => {
    setSelectedPlan(newValue);
  };

  // Desktop/Tablet View - Full Table
  const DesktopComparison = () => (
    <>
      {/* Plan Headers with Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 4,
          maxWidth: "71%",
          marginLeft: "auto",
          marginRight: 0,
        }}
      >
        {plans.map((plan, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px: 1,
              width: "20%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f5f5f5",
                width: "100%",
                color: "#352f36",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                py: 1.2,
                fontSize: isTablet ? "0.9rem" : "1.1rem",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                mb: 1.5,
              }}
            >
              {plan}
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "#352f36",
                width: "100%",
                color: "white",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                py: 1.7,
                px: isTablet ? 1 : 1.9,
                fontSize: isTablet ? "0.8rem" : "0.9rem",
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              Get started
            </Button>
          </Box>
        ))}
      </Box>

      {/* Feature Comparison Table */}
      <TableContainer component={Paper} sx={{ boxShadow: "none", mt: 2 }}>
        {Object.entries(features).map(
          ([category, featureList], categoryIndex) => (
            <React.Fragment key={category}>
              <Table
                sx={{ 
                  minWidth: 650, 
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: "8px 6px"
                }}
                aria-label="pricing comparison table"
              >
                {/* Category Header */}
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "#f5f5f5",
                      "&:last-child td, &:last-child th": { border: 0 },
                      width: "100%",
                    }}
                  >
                    <TableCell
                      colSpan={plans.length + 1}
                      sx={{
                        py: 2,
                        px: 2,
                        borderBottom: "0",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#352f36",
                          fontSize: isTablet ? "1.3rem" : "1.5rem",
                        }}
                      >
                        {category} {billingCycle === 'yearly' && category !== "Adds On (not included in plans)" && (
                          <Typography 
                            component="span" 
                            sx={{ 
                              ml: 1,
                              fontSize: isTablet ? "0.9rem" : "1rem",
                              fontWeight: 600,
                              color: "#352f36",
                              px: 1,
                              py: 0.5,
                              borderRadius: "4px"
                            }}
                          >
                            
                          </Typography>
                        )}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {featureList.map((feature, featureIndex) => (
                    <TableRow
                      key={featureIndex}
                      sx={{
                        "&:last-child td, &:last-child th": { borderBottom: 0 },
                        height: "50px",
                        backgroundColor: "transparent",
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          borderBottom: "none",
                          fontWeight: 900,
                          fontSize: isTablet ? "0.8rem" : "0.9rem",
                          width: "30%",
                          py: 1.5,
                          px: 2,
                          borderRadius: "8px",
                          backgroundColor: featureIndex % 2 === 0 ? "#fafafa" : "#f2f2f2",
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
                            borderBottom: "none",
                            width: "14%",
                            py: 1.5,
                            px: 1.5,
                            borderRadius: "8px",
                            backgroundColor: featureIndex % 2 === 0 ? "#fafafa" : "#f2f2f2",
                          }}
                        >
                          {feature.included ? (
                            feature.included[planIndex] ? (
                              <CheckIcon
                                sx={{ 
                                  color: "#333", 
                                  fontSize: "1.2rem",
                                  // Highlight yearly bonuses with a different color
                                  ...(billingCycle === 'yearly' && 
                                     category !== "Adds On (not included in plans)" &&
                                     ((category === "Learning Experience" && 
                                       (feature.name === "Exclusive access to new content" && planIndex === 1) ||
                                       (feature.name === "Unlimited access to all courses" && planIndex === 2)) ||
                                      (category === "Tool & Resources" &&
                                       ((feature.name === "Lesson management tools" && planIndex === 0) ||
                                        (feature.name === "Vendor referrals" && planIndex === 0) ||
                                        (feature.name === "Free unlimited access to in-app resources" && planIndex === 2)))) && {
                                    color: "#008800",
                                  })
                                }}
                              />
                            ) : null
                          ) : (
                            feature.price && (
                              <Typography 
                                variant="body2"
                                sx={{ 
                                  fontSize: isTablet ? "0.8rem" : "0.9rem",
                                  // Highlight yearly discount with a different color
                                  ...(billingCycle === 'yearly' && {
                                    color: "#352f36",
                                    fontWeight: 600
                                  })
                                }}
                              >
                                {feature.price[planIndex]}
                                {billingCycle === 'yearly' && (
                                  <Typography 
                                    component="span" 
                                    sx={{ 
                                      display: "block",
                                      fontSize: "0.7rem",
                                      color: "#008800"
                                    }}
                                  >
                                  </Typography>
                                )}
                              </Typography>
                            )
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {/* Add space between categories */}
              {categoryIndex < Object.entries(features).length - 1 && (
                <Box sx={{ my: 4 }} />
              )}
            </React.Fragment>
          )
        )}
      </TableContainer>
    </>
  );

  // Mobile View - Plan Tabs + Features
  const MobileComparison = () => (
    <>
      {/* Plan Selector Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={selectedPlan} 
          onChange={handleChange} 
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="plan selection tabs"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 2,
            },
            '& .Mui-selected': {
              color: '#352f36',
              fontWeight: 700,
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#352f36',
            }
          }}
        >
          {plans.map((plan, index) => (
            <Tab key={index} label={plan} />
          ))}
        </Tabs>
      </Box>

      {/* Get Started Button for Selected Plan */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: "#352f36",
            width: "80%",
            color: "white",
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
            py: 1.5,
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          Get started with {plans[selectedPlan]}
        </Button>
      </Box>

      {/* Show current billing cycle */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        mb: 2,
        backgroundColor: "#f5f5f5",
        py: 1,
        borderRadius: "8px"
      }}>
        <Typography sx={{ fontWeight: 600, color: "#352f36" }}>
          {billingCycle === 'monthly' ? 'Monthly' : 'Yearly'} Plan
          {billingCycle === 'yearly' && (
            <Typography 
              component="span" 
              sx={{ 
                ml: 1,
                fontWeight: 600,
                color: "#008800",
                fontSize: "0.8rem"
              }}
            >
              
            </Typography>
          )}
        </Typography>
      </Box>

      {/* Feature Categories as Accordions */}
      {Object.entries(features).map(
        ([category, featureList], categoryIndex) => (
          <Accordion 
            key={categoryIndex} 
            defaultExpanded={categoryIndex === 0}
            sx={{ 
              mb: 2,
              boxShadow: 'none',
              '&:before': {
                display: 'none',
              },
              backgroundColor: 'transparent',
              borderRadius: '8px',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${categoryIndex}-content`}
              id={`panel${categoryIndex}-header`}
              sx={{ 
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                py: 1,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#352f36",
                  fontSize: "1.2rem",
                }}
              >
                {category}
                {billingCycle === 'yearly' && category !== "Adds On (not included in plans)" && (
                  <Typography 
                    component="span" 
                    sx={{ 
                      ml: 1,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#008800",
                      backgroundColor: "#f0fff0",
                      px: 1,
                      py: 0.3,
                      borderRadius: "4px"
                    }}
                  >
                   
                  </Typography>
                )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2, pt: 1, pb: 2 }}>
              {featureList.map((feature, featureIndex) => (
                <Box 
                  key={featureIndex}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1.5,
                    px: 1.5,
                    mb: 1,
                    mt: 1,
                    borderRadius: '6px',
                    backgroundColor: featureIndex % 2 === 0 ? '#f2f2f2' : '#fafafa',
                    boxShadow: '0px 1px 3px rgba(0,0,0,0.05)',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      flex: 1,
                      pl: 1,
                    }}
                  >
                    {feature.name}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: '#fff', 
                    width: '90px', 
                    height: '40px',
                    mr: 1,
                    borderRadius: '4px',
                    boxShadow: '0px 1px 2px rgba(0,0,0,0.05)'
                  }}>
                    {feature.included ? (
                      feature.included[selectedPlan] ? (
                        <CheckIcon
                          sx={{ 
                            color: "#333", 
                            fontSize: "1.2rem",
                            // Highlight yearly bonuses
                            ...(billingCycle === 'yearly' && 
                               category !== "Adds On (not included in plans)" &&
                               ((category === "Learning Experience" && 
                                 (feature.name === "Exclusive access to new content" && selectedPlan === 1) ||
                                 (feature.name === "Unlimited access to all courses" && selectedPlan === 2)) ||
                                (category === "Tool & Resources" &&
                                 ((feature.name === "Lesson management tools" && selectedPlan === 0) ||
                                  (feature.name === "Vendor referrals" && selectedPlan === 0) ||
                                  (feature.name === "Free unlimited access to in-app resources" && selectedPlan === 2)))) && {
                              color: "#008800",
                            })
                          }}
                        />
                      ) : null
                    ) : (
                      feature.price && (
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600,
                            ...(billingCycle === 'yearly' && {
                              color: "#008800"
                            })
                          }}
                        >
                          {feature.price[selectedPlan]}
                        </Typography>
                      )
                    )}
                  </Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        )
      )}
    </>
  );

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 4, sm: 5, md: 6 },
        overflow: "initial",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 700,
          mb: { xs: 4, md: 8 },
          textAlign: "center",
          color: "#352f36",
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }
        }}
      >
        What&apos;s the difference?
      </Typography>

      {/* Responsive Layout Switch */}
      {isMobile ? <MobileComparison /> : <DesktopComparison />}
    </Container>
  );
}