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
  useTheme
} from "@mui/material";
import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

export default function FashionCourseSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Container maxWidth="lg" sx={{ 
      px: { xs: 2, sm: 3, md: 4, lg: 10 },
      py: { xs: 4, sm: 5, md: 6 },
      overflow: 'hidden'
    }}>
      {/* Main Heading Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 2, sm: 3, md: 4 },
          width: "100%",
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 600,
            color: "#333",
            mb: 1,
            fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.5rem" }
          }}
        >
          Ignite Your Potential, Master the Fashion Industry with{" "}
          <Box component="span" sx={{ color: "#97404f", display: { xs: 'inline', md: 'inline' } }}>
            Expert Insights
          </Box>
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mx: "auto", 
            color: "#555",
            maxWidth: "800px",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }
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
          height: { xs: "200px", sm: "350px", md: "500px", lg: "600px" },
          width: "100%",
          // borderRadius: "8px",
          overflow: "hidden",
          mb: { xs: 3, sm: 4, md: 5 },
          mx: "auto",
          boxShadow: "0 10px 30px rgba(255, 192, 203, 0.3)", // Light pink shadow
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
            objectFit: "cover", 
            objectPosition: "center"
          }}
          priority
        />
      </Box>

      {/* Feature Cards */}
      <Grid 
        container 
        spacing={{ xs: 3, sm: 4, md: 2 }}
        justifyContent={{ xs: "center", md: "space-between" }}
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
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                mb: 2,
              }}
            >
              <SchoolIcon sx={{ 
                color: "#6C1D45", 
                fontSize: { xs: 50, sm: 60, md: 70 } 
              }} />
            </Box>
            <CardContent sx={{ p: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", sm: "1rem" }
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
              <AvTimerIcon sx={{ 
                color: "#D4AF37", 
                fontSize: { xs: 50, sm: 60, md: 70 } 
              }} />
            </Box>
            <CardContent sx={{ p: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 1,
                  fontSize: { xs: "0.9rem", sm: "1rem" }
                }}
              >
                Learn anytime, anywhere.
              </Typography>
              <Typography 
                variant="caption" 
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.8rem" }
                }}
              >
                Flexible, on-demand learning.
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
                  color: "#B02A37", 
                  fontSize: { xs: 50, sm: 60, md: 70 } 
                }}
              />
            </Box>
            <CardContent sx={{ p: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 1,
                  fontSize: { xs: "0.9rem", sm: "1rem" }
                }}
              >
                Real-world fashion projects
              </Typography>
              <Typography 
                variant="caption" 
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.8rem" }
                }}
              >
                Industry-driven challenges to test skills.
              </Typography>
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
                  color: "#4A6FA5", 
                  fontSize: { xs: 50, sm: 60, md: 70 } 
                }} 
              />
            </Box>
            <CardContent sx={{ p: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", sm: "1rem" }
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