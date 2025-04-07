"use client";
import React from "react";
import { Box, Typography, Container, Grid, Divider, Link } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box sx={{ width: "100%", borderTop: "1px solid #e0e0e0"}}>
      <Container maxWidth="lg" sx={{ py: 12, px: { xs: 3, sm: 4, md: 10,} }}>
        <Grid container spacing={2} sx={{ pt:2, borderTop: "1.5px solid #352F36",}}>
          {/* Logo Section - Adjusted for left alignment */}
          <Grid item xs={12} md={2.5} sx={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start"}}>
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
              <Image
                src="/logo.png"
                alt="99 Yards Academy Logo"
                width={110}
                height={60}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>

          {/* Join Us Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, color: "#352F36" }}
            >
              {/* Join Us */}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.9 }}>
              <Link
                href="#"
                underline="none"
                sx={{ color: "#555", "&:hover": { color: "#000" } }}
              >
                {/* Plans & Pricing */}
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{ color: "#555", "&:hover": { color: "#000" } }}
              >
                {/* Teach on 99 Yards */}
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{ fontSize: "20px", fontWeight: 900, mb: 3, color: "#352F36" }}
            >
              Join Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.9 }}>
              <Link
                href="#"
                underline="none"
                sx={{ fontSize: "16px", color: "#352F36", "&:hover": { color: "#352F36" } }}
              >
                Plans & Pricing
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{fontSize: "16px", color: "#352F36", "&:hover": { color: "#352F36" } }}
              >
                Teach on 99 Yards
              </Link>
            </Box>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{ fontSize: "20px", fontWeight: 900, mb: 3, color: "#352F36" }}
            >
              About
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.9 }}>
              <Link
                href="#"
                underline="none"
                sx={{fontSize: "16px",  color: "#352F36", "&:hover": { color: "#352F36" } }}
              >
                Help
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{ fontSize: "16px", color: "#352F36", "&:hover": { color: "#352F36" } }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Info Section */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{fontSize: "20px",  fontWeight: 900, mb: 3, color: "#352F36" }}
            >
              Info
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.9 }}>
              <Link
                href="#"
                underline="none"
                sx={{ fontSize: "16px", color: "#352F36", "&:hover": { color: "#352F36" } }}
              >
                Privacy Policies
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{ fontSize: "16px", color: "#352F36", "&:hover": { color: "#352F36" } }}
              >
                Terms & Conditions
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Divider */}
      <Divider sx={{ borderColor: "#e0e0e0" }} />
    </Box>
  );
}