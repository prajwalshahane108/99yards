"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  InputBase,
} from "@mui/material";

export default function FashionWaitlistSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your waitlist signup logic here
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        backgroundColor: "#f5f3ee", // Light beige background
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              color: "#333",
              mb:0.4,
              fontSize: { xs: "1.75rem", sm: "2rem", md: "1.7rem" },
            }}
          >
            Ignite your fashion passion. Learn without limits, excel without expenses.
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 600,
              color: "#333",
              mb: 4,
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "1.7rem" },
            }}
          >
            Your dream career starts here.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              width: "100%",
              maxWidth: "600px",
              gap: 3,
              mt: 1,
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                backgroundColor: "white",
                borderRadius: "4px",
                height: "56px",
                "& .MuiOutlinedInput-root": {
                  height: "56px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e0e0e0",
                },
              }}
              InputProps={{
                sx: {
                  color: "#555",
                  fontSize: "1rem",
                  "&::placeholder": {
                    color: "#888",
                    opacity: 0.8,
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#333",
                color: "white",
                height: "50px",
                width: "166px",
                borderRadius: "8px",
                // padding: "0 1px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "0.9rem" },
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#444",
                  boxShadow: "none",
                },
              }}
            >
              Join waitlist
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}