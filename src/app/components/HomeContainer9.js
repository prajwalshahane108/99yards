"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function TestimonialsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const testimonials = [
    {
      quote:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat egestas finibus ultrices donec phasellus praesent ipsum blandit sociosqu.",
      name: "Name",
      title: "Job Title at Company",
    },
    {
      quote:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat egestas finibus ultrices donec phasellus praesent ipsum blandit sociosqu.",
      name: "Name",
      title: "Job Title at Company",
    },
    {
      quote:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat egestas finibus ultrices donec phasellus praesent ipsum blandit sociosqu.",
      name: "Name",
      title: "Job Title at Company",
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, sm: 5, md: 6 }, px: { xs: 4, sm: 5, md: 6 }, backgroundColor: "#2d2b2e" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: { xs: 3, sm: 4, md: 3 },
            color: "white",
            textAlign: { xs: "center", sm: "center" },
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            width: "100%",
          }}
        >
          Discover How 99 Yards Academy Changed Their Lives
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: { xs: 2.5, sm: 3, md: 4 },
                      color: "#352F36",
                      fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
                      fontWeight: 400,
                    }}
                  >
                    &quot;{testimonial.quote}&quot;
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      sx={{
                        width: { xs: 40, sm: 48, md: 56 },
                        height: { xs: 40, sm: 48, md: 56 },
                        bgcolor: "#e0e0e0",
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: "#333",
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          fontSize: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem" },
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