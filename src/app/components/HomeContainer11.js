"use client";

import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import Image from "next/image";

export default function FashionCTABanner() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        backgroundColor: "#f7f5f1",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 10 } }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "280px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/fashion-designer.png"
                alt="Fashion professionals using mobile devices"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority
              />
            </Box>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  mt: 2,
                  color: "#333",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Ready to redefine the{" "}
                <Box
                  component="span"
                  sx={{ color: "#B02A37", display: "inline" }}
                >
                  fashion world?
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: "#000",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                Join the waitlist to start your transformative journey with 99
                Academy today.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#333",
                  color: "white",
                  borderRadius: "10px",
                  padding: "14px 12px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#555",
                  },
                }}
              >
                Join waitlist
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
