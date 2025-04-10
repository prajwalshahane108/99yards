import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Container,
} from "@mui/material";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image"; // Import Image from next/image
const cardData = [
  {
    title: "Getting Started",
    description:
      "Learning how 99 Yards Academy works and how to start learning.",
    icon: "/yard.png", // Place logo.png in /public
    isImage: true,
  },
  {
    title: "Account/Profile",
    description: "Manage your account settings.",
    icon: <PersonIcon fontSize="large" />,
    isImage: false,
  },
  {
    title: "Getting Started",
    description:
      "Learning how 99 Yards Academy works and how to start learning.",
    icon: "/yard.png",
    isImage: true,
  },
  {
    title: "Purchase/Refunds",
    description: "Learn about purchasing courses, templates, refunds.",
    icon: <ShoppingCartIcon fontSize="large" />,
    isImage: false,
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        px: 2,
        py: { xs: 5, sm: 5, md: 8 },
        bgcolor: "#f4f4f4",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {cardData.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  // change bgcolor for 1st container
                  bgcolor: "white",
                  "&:hover": {
                    bgcolor: "#EAE4D6",
                  },
                  height: 280,
                  width: "100%",
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      width: 130,
                      height: 130,
                      bgcolor: "#EAE4D6",
                      justifyContent: "center",
                      alignItems: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {item.isImage ? (
                      <Image
                      src={item.icon}
                      alt={item.title}
                      width={130}
                      height={130}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                    ) : (
                      React.cloneElement(item.icon, {
                        sx: { color: "#352f36", fontSize: 80 }, // 👈 customize color here
                      })
                    )}
                  </Avatar>

                <Typography sx={{ color: "#352f36" }} variant="subtitle1" fontWeight="600" gutterBottom>
                    {item.title}
                  </Typography>
                  <Box sx={{ maxWidth: 260, mx: "auto" }}>
                    <Typography sx={{ color: "#352f36" }} variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
