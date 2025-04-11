import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { joinWaitlist } from "../utils/WaitlistAPI";

const JoinWaitlistModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roles: [],
    otherRole: "",
    learningPreferences: [],
    otherLearningPreference: "",
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        roles: [...formData.roles, name],
      });
    } else {
      setFormData({
        ...formData,
        roles: formData.roles.filter((role) => role !== name),
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        learningPreferences: [...formData.learningPreferences, name],
      });
    } else {
      setFormData({
        ...formData,
        learningPreferences: formData.learningPreferences.filter(
          (pref) => pref !== name
        ),
      });
    }
  };

  const validateForm = () => {
    // Basic validation
    if (!formData.name.trim()) {
      setSnackbar({
        open: true,
        message: "Name is required",
        severity: "error",
      });
      return false;
    }

    if (!formData.email.trim()) {
      setSnackbar({
        open: true,
        message: "Email is required",
        severity: "error",
      });
      return false;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address",
        severity: "error",
      });
      return false;
    }

    // Check if at least one role is selected
    if (formData.roles.length === 0) {
      setSnackbar({
        open: true,
        message: "Please select at least one role",
        severity: "error",
      });
      return false;
    }

    // Check if at least one learning preference is selected
    if (formData.learningPreferences.length === 0) {
      setSnackbar({
        open: true,
        message: "Please select at least one learning preference",
        severity: "error",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Call the API to join waitlist
      const response = await joinWaitlist(formData);
      
      // Show success message
      setSnackbar({
        open: true,
        message: "Successfully joined the waitlist!",
        severity: "success",
      });

      // Reset form and close modal after a short delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          roles: [],
          otherRole: "",
          learningPreferences: [],
          otherLearningPreference: "",
        });
        onClose();
      }, 1500);
      
    } catch (error) {
      // Show error message
      setSnackbar({
        open: true,
        message: error.message || "Failed to join waitlist. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2, bgcolor: "white" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#352f36" }}
          >
            Join Our Waitlist for latest updates
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "grey.500",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              type="email"
            />
            <TextField
              margin="normal"
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
            />

            <FormControl component="fieldset" sx={{ mt: 2, width: "100%" }}>
              <FormLabel component="legend" sx={{ fontWeight: "bold" }}>
                What best describes your role in the fashion industry? *
              </FormLabel>
              <FormGroup sx={{ mt: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleRoleCheckboxChange}
                      name="executive"
                      checked={formData.roles.includes("executive")}
                    />
                  }
                  label="Fashion Industry Executive"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleRoleCheckboxChange}
                      name="professional-mid"
                      checked={formData.roles.includes("professional-mid")}
                    />
                  }
                  label="Fashion Industry Professional (0-5 years experience)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleRoleCheckboxChange}
                      name="professional-senior"
                      checked={formData.roles.includes("professional-senior")}
                    />
                  }
                  label="Fashion Industry Professional (5-10 years experience)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleRoleCheckboxChange}
                      name="entrepreneur"
                      checked={formData.roles.includes("entrepreneur")}
                    />
                  }
                  label="Aspiring Entrepreneur"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleRoleCheckboxChange}
                      name="student"
                      checked={formData.roles.includes("student")}
                    />
                  }
                  label="Student"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleRoleCheckboxChange}
                      name="other"
                      checked={formData.roles.includes("other")}
                    />
                  }
                  label="Other (please specify)"
                />
                {formData.roles.includes("other") && (
                  <TextField
                    margin="dense"
                    fullWidth
                    id="otherRole"
                    name="otherRole"
                    value={formData.otherRole}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    sx={{ ml: 3, width: "calc(100% - 24px)" }}
                  />
                )}
              </FormGroup>
            </FormControl>

            <FormControl component="fieldset" sx={{ mt: 3, width: "100%" }}>
              <FormLabel component="legend" sx={{ fontWeight: "bold" }}>
                What type of learning would benefit you most? *
              </FormLabel>
              <FormGroup sx={{ mt: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      name="business-essentials"
                      checked={formData.learningPreferences.includes("business-essentials")}
                    />
                  }
                  label="Business essentials"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      name="merchandising-strategies"
                      checked={formData.learningPreferences.includes("merchandising-strategies")}
                    />
                  }
                  label="Merchandising strategies"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      name="product-development"
                      checked={formData.learningPreferences.includes("product-development")}
                    />
                  }
                  label="Product development"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      name="marketing-sales"
                      checked={formData.learningPreferences.includes("marketing-sales")}
                    />
                  }
                  label="Marketing & sales strategies"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      name="sustainable-practices"
                      checked={formData.learningPreferences.includes("sustainable-practices")}
                    />
                  }
                  label="Sustainable practices"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      name="operations-logistics"
                      checked={formData.learningPreferences.includes("operations-logistics")}
                    />
                  }
                  label="Operations & logistics"
                />
                <FormControlLabel
                  control={
                    <Checkbox 
                      onChange={handleCheckboxChange} 
                      name="other"
                      checked={formData.learningPreferences.includes("other")}
                    />
                  }
                  label="Other (please specify)"
                />
                {formData.learningPreferences.includes("other") && (
                  <TextField
                    margin="dense"
                    fullWidth
                    id="otherLearningPreference"
                    name="otherLearningPreference"
                    value={formData.otherLearningPreference}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    sx={{ ml: 3, width: "calc(100% - 24px)" }}
                  />
                )}
              </FormGroup>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#352f36",
                color: "white",
                "&:hover": {
                  bgcolor: "#555",
                  color: "white",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default JoinWaitlistModal;