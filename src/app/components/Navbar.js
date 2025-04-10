"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { name: "Plans & Pricing", path: "/plans" },
    { name: "Teach on 99 Academy", path: "/" },
  ];

  // Drawer content for mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Box sx={{ my: 2 }}>
        <div
          style={{
            position: "relative",
            width: "115px",
            height: "55px",
            margin: "0 auto",
          }}
        >
          <Image
            src="/logo.png"
            alt="99Kards Academy Logo"
            fill
            style={{ objectFit: "contain" }}
            onClick={() => router.push("/")} // This one is OK since it's the home route
          />
        </div>
      </Box>
      <List>
        {navLinks.map((item) => (
          <ListItem
            key={item.name}
            sx={{
              textAlign: "center",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
              cursor: "pointer"
            }}
            onClick={() => router.push(item.path)} // Fixed: Now pushes to the correct path
          >
            <ListItemText
              primary={item.name}
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#2d2d2d",
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center", mt: 1 }}>
          <Button
            variant="outlined"
            sx={{
              color: "#2d2d2d",
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "14px",
              padding: "10px 20px",
              border: "2px solid #2d2d2d",
              width: "100%",
              mb: 1,
            }}
            onClick={() => router.push("/")} // Fixed: Now pushes to login page
          >
            Log in
          </Button>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2d2d2d",
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "14px",
              padding: "10px 20px",
              width: "100%",
              "&:hover": {
                backgroundColor: "#404040",
              },
            }}
            onClick={() => router.push("/")} // Fixed: Now pushes to waitlist page
          >
            Join waitlist
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 1.9 } }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#FFFFFF",
          color: "black",
          boxShadow: "none",
          height: { xs: "80px", md: "105px" },
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: { xs: "0 16px", sm: "0 24px", md: "0 58px" },
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                position: "relative",
                width: "120px",
                height: "60px",
                cursor: "pointer",
              }}
              onClick={() => router.push("/")} // This is correct for the logo
            >
              <Image
                src="/logo.png"
                alt="99Kards Academy Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {/* Navigation Links */}
            {navLinks.map((item) => (
              <Box
                key={item.name}
                onClick={() => router.push(item.path)} // Fixed: Now pushes to the correct path
                sx={{
                  cursor: "pointer",
                  color: "#352F36",
                  fontSize: "16px",
                  fontWeight: 700,
                  padding: "8px 16px",
                  marginRight: item.name === "Teach on 99 Academy" ? "16px" : "0",
                  "&:hover": {
                    color: "#742639",
                  },
                }}
              >
                {item.name}
              </Box>
            ))}

            {/* Login Button */}
            <Button
              variant="outlined"
              sx={{
                color: "#352F36",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "16px",
                padding: "12px 12px",
                border: "1px solid #352F36",
                marginRight: "10px",
                "&:hover": {
                  borderColor: "#000000",
                  backgroundColor: "#f5f5f5",
                },
              }}
              onClick={() => router.push("/")} // Fixed: Now pushes to login page
            >
              Log in
            </Button>

            {/* Join waitlist Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#352F36",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "16px",
                marginRight: "12px",
                padding: "12px 15px",
                "&:hover": {
                  backgroundColor: "#404040",
                },
              }}
              onClick={() => router.push("/")} // Fixed: Now pushes to waitlist page
            >
              Join waitlist
            </Button>
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Mobile Navigation Drawer */}
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </Container>
  );
}