"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function CategoriesSection() {
  const categories = [
    {
      title: "Business Planning",
      image: "/bp.jpg",
      description:
        "Establish your fashion venture with a solid sales forecast, tailored to the competitive US market. We guide you through market research, branding, and financial planning.",
    },
    {
      title: "Manufacturing & Sourcing",
      image: "/machine.jpg",
      description:
        "Navigate the complexities of manufacturing and sourcing with our expert guidance, ensuring quality and ethical practices.",
    },
    {
      title: "Merchandising & Assortment Planning",
      image: "/clothes.jpg",
      description:
        "Master the art of product selection and presentation to optimize sales and customer appeal with our expert guidance.",
    },
    {
      title: "Sales Channel Planning & Setup",
      image: "/sales.jpg",
      description:
        "Navigate the complexities of manufacturing and sourcing with our expert guidance, ensuring quality and ethical practices.",
    },
    {
      title: "Brand Development",
      image: "/brand.jpg",
      description:
        "Create a visually stunning identity that resonates with your target audience. From logo design to storytelling, we make your brand unforgettable.",
    },
    {
      title: "Product Design & Development",
      image: "/product.png",
      description:
        "Navigate the complexities of manufacturing and sourcing with our expert guidance, ensuring quality and ethical practices.",
    },
    {
      title: "End-To-End Process Design & Optimization",
      image: "/end.png",
      description:
        "Navigate the complexities of manufacturing and sourcing with our expert guidance, ensuring quality and ethical practices.",
    },
    {
      title: "Supply Chain",
      image: "/chain.jpg",
      description:
        "Navigate the complexities of manufacturing and sourcing with our expert guidance, ensuring quality and ethical practices.",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f7f5f1" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 9.9 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 900,
            mb: 5,
            color: "#352F36",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Categories
        </Typography>

        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "#FFF",
                  height: "456px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "none",
                  pb: 3.5,
                }}
              >
                <CardMedia
                  component="img"
                  height="186"
                  image={category.image}
                  alt={category.title}
                  sx={{
                    mb: 2,
                    color: "#352F36",
                  }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 2 ,
                      color: "#352F36",
                      padding: "0px 20px",
                      fontSize: "20px",
                      lineHeight: 1.2,
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#352F36",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      padding: "0px 18px",
                    }}
                  >
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
