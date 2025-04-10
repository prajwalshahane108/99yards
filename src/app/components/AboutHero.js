// pages/index.js
"use client";

import React from "react";
import Head from "next/head";
import { Box, Container, Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "proxima-nova",
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
      color: "#333333",
      "@media (max-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
  },
  palette: {
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 1200px)": {
            maxWidth: 1200,
          },
        },
      },
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Fashion Design Platform</title>
        <meta
          name="description"
          content="Turn your vision into fashion's next big thing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>

      <Box
        component="main"
        sx={{
          py: { xs: 6, md: 5 },
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 2, sm: 3, md: 8 }, // Increased padding for better spacing
            width: "100%", // Ensure container takes full width
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left column with text */}
            <Grid
              item
              xs={12}
              md={5}
              alignItems="flex-end"
            >
              <Typography
                // variant="h2"
                // component="h4"
                className="bold-text"
                sx={{
                  color: "#352f36",
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "2.8rem" },
                  fontWeight: 900,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Turn your vision into fashion&apos;s next big thing
              </Typography>
            </Grid>

            {/* Right column with image */}
            <Grid item xs={12} md={7}>
              <Box
                component="img"
                src="/abouthero.jpg"
                alt="Fashion Design image"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
