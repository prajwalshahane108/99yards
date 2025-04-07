"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';export default function LearningGoalsSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#EAE4D6" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 10 } }}>
        <Typography
          // variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: "#352F36",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
          }}
        >
          Learning Focused on Your Goals
        </Typography>

        <Grid container spacing={4.3}>
          {/* Row 1 */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                pl: 2.2,
                pr: 2.2,
                pb: 4,
                pt: 4,
              }}
            >
              <CardContent sx={{ display: "flex", height: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 40,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    mr: 2,
                    flexShrink: 0,
                    alignSelf: "center",
                  }}
                >
                  <NoteOutlinedIcon sx={{ color: "#333", fontSize: 44 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    // component="h3"
                    sx={{ fontWeight: 700, mb: 1, color: "#352F36", fontSize: "1.4rem" }}
                  >
                    Affordable learning
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", lineHeight: 1.6 , color: "#352F36", fontSize: "1rem"}}
                  >
                    Unlike many fashion programs, 99 Yards Academy strives for
                    quality education&apos;s accessibility. Our online fashion design
                    program combines exciting workshops and masterclasses at
                    merely nominal, including courses like textural
                    merchandising, fashion marketing, and how to elevate to
                    leading fashion buyer positions.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                overflow: "hidden",
                display: "flex",
                p: 0,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  height: "100%",
                  minHeight: 220,
                }}
              >
                <Image
                  src="/learning.jpg"
                  alt="Students learning together"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Card>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                overflow: "hidden",
                display: "flex",
                p: 0,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  height: "100%",
                  minHeight: 220,
                }}
              >
                <Image
                  src="/study.jpg"
                  alt="Fashion sketching"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                pl: 2.2,
                pr: 2.2,
                pb: 4,
                pt: 4,
              }}
            >
              <CardContent sx={{ display: "flex", height: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 40,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    mr: 2,
                    flexShrink: 0,
                    alignSelf: "center",
                  }}
                >
                  <MenuBookIcon sx={{ color: "#333", fontSize: 44 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1,  color: "#352F36", fontSize: "1.4rem" }}
                  >
                    Personalized study plan
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", lineHeight: 1.6,  color: "#352F36", fontSize: "1rem" }}
                  >
                    Whether you&apos;re interested in developing a clothing company
                    business plan or mastering the skills needed for degree
                    fashion merchandising, our courses are available at your
                    convenience, making 99 Yards Academy one of the best apps
                    for fashion designing.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Row 3 */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                pl: 2.2,
                pr: 2.2,
                pb: 4,
                pt: 4,
              }}
            >
              <CardContent sx={{ display: "flex", height: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 40,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    mr: 2,
                    flexShrink: 0,
                    alignSelf: "center",
                  }}
                >
                  <CheckBoxOutlinedIcon sx={{ color: "#333", fontSize: 44 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1,  color: "#352F36", fontSize: "1.4rem" }}
                  >
                    Practical learning journey
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", lineHeight: 1.6,  color: "#352F36", fontSize: "1rem" }}
                  >
                    Gain hands-on experience with real-world fashion industry
                    challenges. From crafting a clothing design program to
                    optimizing business plans for a clothing business, students
                    work on practical projects that simulate the industry&apos;s
                    dynamic demands
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                overflow: "hidden",
                display: "flex",
                p: 0,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  height: "100%",
                  minHeight: 220,
                }}
              >
                <Image
                  src="/practical.jpg"
                  alt="Student learning online"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Card>
          </Grid>

          {/* Row 4 */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                overflow: "hidden",
                display: "flex",
                p: 0,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  height: "100%",
                  minHeight: 220,
                }}
              >
                <Image
                  src="/programs.jpg"
                  alt="Mentorship session"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                pl: 2.2,
                pr: 2.2,
                pb: 4,
                pt: 4,
              }}
            >
              <CardContent sx={{ display: "flex", height: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 40,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    mr: 2,
                    flexShrink: 0,
                    alignSelf: "center",
                  }}
                >
                  <AccountCircleOutlinedIcon sx={{ color: "#333", fontSize: 44 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1,  color: "#352F36", fontSize: "1.4rem" }}
                  >
                    Mentorship programs
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", lineHeight: 1.6,  color: "#352F36", fontSize: "1rem" }}
                  >
                    At 99 Yards Academy, we connect you with seasoned
                    professionals through our mentorship program. Whether you&apos;re
                    working on a fashion marketing and merchandising strategy or
                    planning your clothing apparel business, our mentors provide
                    guidance to ensure your success.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
