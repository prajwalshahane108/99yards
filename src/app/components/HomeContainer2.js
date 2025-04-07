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
              mb: 0.4,
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2rem" },
            }}
          >
            Ignite your fashion passion. Learn without limits, excel without
            expenses.
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              color: "#333",
              mb: 4,
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
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
              maxWidth: "650px",
              gap: 2,
              mt: 1,
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                backgroundColor: "white",
                borderRadius: "12px",
                border: "none",
                "&:hover": {
                  border: "none",
                },
                "& .MuiInputBase-root": {
                  borderRadius: "12px",
                  border: "none",
                },
                height: "50px",
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                  borderColor: "#fff",
                  border: "none",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                  },
                  borderRadius: "12px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                  borderRadius: "12px",
                },
              }}
              InputProps={{
                sx: {
                  color: "#555",
                  fontSize: "1rem",
                  "& input::placeholder": {
                    color: "#9E9E9E", // Change this to your desired placeholder color
                    opacity: 1, // This ensures the color is fully visible
                  },
                },
              }}
            />
            <Button
              type="submit"
              sx={{
                backgroundColor: "#352F36",
                color: "white",
                height: "50px",
                width: "136px",
                borderRadius: "8px",
                // padding: "0 1px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1rem" },
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
