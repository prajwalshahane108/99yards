"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const theme = createTheme({
  typography: {
    h2: {
      fontWeight: 600,
      fontSize: "2.75rem",
      textAlign: "center",
      color: "#352F36",
      marginBottom: "0.4rem",
      "@media (max-width:600px)": {
        fontSize: "2.25rem",
      },
    },
    subtitle1: {
      fontSize: "1.15rem",
      textAlign: "center",
      color: "#352F36",
      marginBottom: "0.1rem",
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: 500,
      textAlign: "center",
      color: "#352F36",
      marginBottom: "1rem",
      marginTop: "2rem",
    },
  },
  palette: {
    primary: {
      main: "#c15265", // Pink/red color for the links
    },
    text: {
      primary: "#352F36",
      secondary: "#555555",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#e0e0e0",
            },
            "&:hover fieldset": {
              borderColor: "#c13584",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#c13584",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#999999",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
  },
});

export default function GetInTouch() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{  py: { xs: 6, md: 8 } }}
      >
        <Container maxWidth="md">
          {/* Main Heading */}
          <Typography
            variant="h2"
            component="h2"
            sx={{ color: "#352F36", weight: 700 }}
          >
            Get in touch with our team
          </Typography>

          {/* Subtitle */}
          <Typography variant="subtitle1">
            You can send us a message or email. We'd be happy to help you out.
          </Typography>

          {/* Email Section */}
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Typography
              sx={{ fontWeight: 400, mt: 4, mb: 2, fontSize: "1.1rem", color: "#352F36" }}
            >
              Send an email:
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                mb: 1,
                fontSize: "0.9rem",
                color: "#c15265",
              }}
            >
              Insert email
            </Typography>
          </Box>

          {/* Help with Account */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h6" component="h1">
              Need help with your existing account?
            </Typography>

            <Link href="/help" color="primary">
              <Typography
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontSize: "1rem",
                  fontWeight: 800,
                }}
              >
                Visit our Help Center
                <ArrowForwardIcon fontSize="small" />
              </Typography>
            </Link>
          </Box>

          {/* FAQ Section */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" component="h2">
              Have a simple question?
            </Typography>

            <Link href="/" color="primary">
              <Typography
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontSize: "1rem",
                  fontWeight: 800,
                }}
              >
                Check out our FAQ
                <ArrowForwardIcon fontSize="small" />
              </Typography>
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
