"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

export default function FashionCourseSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: { xs: 2, sm: 3, md: 3 },
        py: { xs: 4, sm: 5, md: 6 },
        overflow: "initial",
        position: "relative", // Added for positioning the blur effect
      }}
    >
      {/* Blur effect - customizable position and size */}
      <Box
        sx={{
          position: "absolute",
          // Change these values to adjust position
          top: "16%", // Adjust vertical position (0% = top, 100% = bottom)
          left: "25%", // Adjust horizontal position (0% = left, 100% = right)
          // Change these values to adjust size
          width: { xs: "180px", sm: "220px", md: "580px" }, // Control width at different breakpoints
          height: { xs: "180px", sm: "220px", md: "280px" }, // Control height at different breakpoints
          background: `#C15265`,
          filter: "blur(140px)", // Adjust blur intensity (higher = more blurry)
          opacity: 0.4, // Adjust opacity (0 = invisible, 1 = solid)
          zIndex: 0,
          borderRadius: "50%", // Keep it circular
          // Adjust the offset from specified position
          transform: "translate(-30%, -30%)",
        }}
      />

      {/* Main Heading Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 2, sm: 3, md: 3.5 },
          width: "100%",
          maxWidth: "100%",
          mx: "auto",
          position: "relative", // Added to ensure text appears above blur
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 600,
            color: "#352F36",
            mb: 1,
            fontSize: { xs: "1.75rem", sm: "2.2rem", md: "3rem" },
          }}
        >
          Ignite Your Potential, Master the Fashion Industry <br />{" "}
          {/* <Box
            component="span"
            sx={{ color: "#97404f", display: { xs: "inline", md: "inline" } }}
          >
            with
          </Box> */}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(to right, #C15262, #5B2730)",
              WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "#97404f",
              display: { xs: "inline", md: "inline" },
            }}
          >
            <Box
              component="span"
              sx={{ color: "#333", display: { xs: "inline", md: "inline" } }}
            >
              {" "}
              with
            </Box>{" "}
            Expert Insights
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mx: "auto",
            color: "#352F36",
            maxWidth: "1100px",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
          }}
        >
          Gain hands-on experience through real-world projects, expert
          mentorship, and create a winning fashion business.
        </Typography>
      </Box>

      {/* Main Image with pink shadow - centered */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "200px", sm: "350px", md: "500px", lg: "630px" },
          width: "100%",
          // borderRadius: "8px",
          overflow: "hidden",
          mb: { xs: 3, sm: 4, md: 5 },
          mx: "auto",
          // boxShadow: "0 10px 30px rgba(255, 192, 203, 0.3)", // Light pink shadow
          zIndex: 1, // Ensure the image appears above the blur
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background:
              "linear-gradient(to top, rgba(255,192,203,0.1), transparent)",
            zIndex: 1,
          },
        }}
      >
        <Image
          src="/fashion-designer.jpg"
          alt="Fashion Designer Working"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          priority
        />
      </Box>

      {/* Feature Cards */}
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 14 }}
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{ position: "relative", zIndex: 1 }} // Ensure cards appear above blur
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3} lg={2.8}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: isMobile ? "50px" : isTablet ? "60px" : "70px",
                height: isMobile ? "50px" : isTablet ? "60px" : "70px",
              }}
            >
              <Image
                src="/download.png"
                alt="99Kards Academy Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <CardContent sx={{ p: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: "#352F36",
                }}
              >
                Affordable fashion education for your life dreams.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3} lg={2.8}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                mb: 2,
              }}
            >
              <AvTimerIcon
                sx={{
                  color: "#c7b897",
                  fontSize: { xs: 50, sm: 60, md: 70 },
                }}
              />
            </Box>
            <CardContent sx={{ p: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: "#352F36",
                }}
              >
                Learn anytime, anywhere. <br /> Flexible, on-demand learning.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3} lg={2.8}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                mb: 2,
              }}
            >
              <CalendarTodayOutlinedIcon
                sx={{
                  color: "#c05265",
                  fontSize: { xs: 50, sm: 60, md: 55 },
                }}
              />
            </Box>
            <CardContent sx={{ p: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: "#352F36",
                }}
              >
                Real-world fashion projects <br /> Industry-driven challenges to
                test skills.
              </Typography>
              {/* <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.8rem" },
                }}
              >
                Industry-driven challenges to test skills.
              </Typography> */}
            </CardContent>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={3} lg={2.8}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                mb: 2,
              }}
            >
              <HandshakeOutlinedIcon
                sx={{
                  color: "#666679",
                  fontSize: { xs: 50, sm: 60, md: 65 },
                }}
              />
            </Box>
            <CardContent sx={{ p: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: "#352F36",
                }}
              >
                Learn from industry experts through personalized mentorship.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
