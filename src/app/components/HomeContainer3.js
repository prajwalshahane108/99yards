"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function FeaturedInSection() {
  const featuredLogos = [
    { name: "FIT", src: "/fit.png", bgColor: "#352F36" },
    { name: "Parsons", src: "/parsons.png", bgColor: "#FFFFFF" },
    { name: "SCAD", src: "/scad.png", bgColor: "#000000" },
    { name: "Art Institute", src: "/ai.png", bgColor: "#FFFFFF" },
    { name: "Otis College", src: "/arts.png", bgColor: "#000000" },
    { name: "FIDM", src: "/fidm.png", bgColor: "#FFFFFF" },
    { name: "UNT", src: "/unt.png", bgColor: "#FFFFFF" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: 6,
        backgroundColor: "#352F36", // Dark background
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "white",
            mb: 4,
            textAlign: "left",
            ml: { xs: 2, md: 0 },
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Featured In
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            gap: 2,
            mb: 4,
          }}
        >
          {featuredLogos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: 100,
                height: 100,
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: logo.bgColor, // Using the individual logo background color
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: { xs: 1, md: 0 },
                mb: { xs: 2, md: 0 },
              }}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={100}
                height={100}
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}