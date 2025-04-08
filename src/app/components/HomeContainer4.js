"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

export default function FashionCareerSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 }, // Add proper padding top and bottom
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Add this to center horizontally
        minHeight: { xs: "auto", md: "600px" },
        width: "100%", // Ensure full width
        overflow: "hidden", // Prevent overflow issues
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 }, // Increased padding for better spacing
          width: "100%", // Ensure container takes full width
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 6 }}
          alignItems="center"
          justifyContent="space-between" // Better distribution of space
          direction={{ xs: "column-reverse", md: "row" }}
        >
          {/* Left side with overlapping images */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mb: { xs: 4, md: 0 }, // Add bottom margin on mobile
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: "320px", sm: "380px", md: "450px" },
                width: "100%", // Use percentage for better responsiveness
                maxWidth: { xs: "340px", sm: "400px", md: "500px" },
                mt: { xs: 2, md: 4 },
              }}
            >
              {/* Top-left image */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: { xs: "calc(50% - 170px)", md: 0 }, // Responsive positioning
                  width: { xs: "180px", sm: "220px", md: "300px" },
                  height: { xs: "120px", sm: "150px", md: "200px" },
                  borderRadius: "8px",
                  overflow: "hidden",
                  zIndex: 1,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transform: { xs: "none", md: "none" }, // Remove transformations
                }}
              >
                <Image
                  src="/topleft.jpg"
                  alt="Mentor and student working together"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              {/* Middle-right image - overlaps other images */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "100px", md: "130px" },
                  right: { xs: "calc(50% - 170px)", md: -30 }, // Responsive positioning
                  width: { xs: "180px", sm: "220px", md: "300px" },
                  height: { xs: "120px", sm: "150px", md: "200px" },
                  borderRadius: "8px",
                  overflow: "hidden",
                  zIndex: 3,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transform: { xs: "none", md: "none" }, // Remove transformations
                }}
              >
                <Image
                  src="/center.jpg"
                  alt="Fashion professional working"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              {/* Bottom-left image */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 0, md: 10 },
                  left: { xs: "calc(50% - 170px)", md: 0 }, // Responsive positioning
                  width: { xs: "180px", sm: "220px", md: "300px" },
                  height: { xs: "120px", sm: "150px", md: "200px" },
                  borderRadius: "8px",
                  overflow: "hidden",
                  zIndex: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transform: { xs: "none", md: "none" }, // Remove transformations
                }}
              >
                <Image
                  src="/bottomleft.jpg"
                  alt="Fashion designer sketching"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right side with content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start", // Align content at top
              width: "100%",
              px: { xs: 2, md: 4 }, // Add horizontal padding
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "90%", md: "100%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h1"
                component="div"
                className="bold-text"
                sx={{
                  fontWeight: 900,
                  mb: { xs: 1.5, md: 2 },
                  color: "#352F36",
                  lineHeight: 1.2,
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.9rem" },
                }}
              >
                Pivoting into fashion, advancing your career, or{" "}
                <Box
                  component="span"
                  sx={{
                    fontWeight: 800,
                    display: "inline",
                    background: "linear-gradient(to right, #a54656, #692c37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "#97404f", // Fallback color for browsers that don't support the gradient
                    position: "relative",
                    fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.9rem" },
                  }}
                >
                  growing your business
                </Box>
                ?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 3, md: 3 },
                  color: "#352F36",
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                  maxWidth: { xs: "100%", sm: "85%", md: "100%" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Take the leap to transform your passion and expertise into
                remarkable success in the fashion industry.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#352F36",
                    color: "white",
                    borderRadius: "12px",
                    padding: { xs: "10px 12px", md: "13px 15px" },
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    "&:hover": {
                      backgroundColor: "#555",
                    },
                  }}
                >
                  Join waitlist
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
