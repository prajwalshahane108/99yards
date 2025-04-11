"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Slider,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const theme = createTheme({
  typography: {
    fontFamily: "proxima-nova",
    h2: {
      fontWeight: 600,
      fontSize: "3rem",
      color: "#352f36",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
  },
  palette: {
    background: {
      default: "#f5f5f0",
      paper: "#f5f5f0",
    },
    primary: {
      main: "#ff3d00",
    },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 4,
          "& .MuiSlider-thumb": {
            width: 12,
            height: 12,
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#e0e0e0",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
  },
});

export default function MeetTheTeam() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Effect to update video progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setCurrentTime(video.currentTime);
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const handleProgressChange = (event, newValue) => {
    setProgress(newValue);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime =
        (newValue / 100) * videoRef.current.duration;
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (videoRef.current) {
      videoRef.current.volume = newValue / 100;
      setIsMuted(newValue === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume / 100;
        setIsMuted(false);
      } else {
        videoRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{
          py: { xs: 4, md: 8 },
          backgroundColor: "#f5f5f0",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 2, sm: 3, md: 6 },
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            alignItems="center"
            direction={{ xs: "column-reverse", md: "row" }}
          >
            {/* Video Player */}
            <Grid item xs={12} md={7} sx={{ width: "100%" }}>
              <Box
                sx={{
                  position: "relative",
                  border: "1px solid rgb(8, 8, 8)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  backgroundColor: "white",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                {/* Video Element */}
                <Box
                  component="video"
                  ref={videoRef}
                  sx={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "16/9",
                    display: "block",
                    // backgroundColor: "#555555",
                  }}
                  poster="/video-placeholder.jpg" // You can update this to a specific thumbnail for 99yards video if available
                >
                  <source src="/99yards.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>

                {/* Video Controls */}
                <Box
                  sx={{
                    position: "relative",
                    padding: { xs: "6px 8px", md: "8px 12px" },
                    display: "flex",
                    flexDirection: {
                      xs: isMobile ? "column" : "row",
                      md: "row",
                    },
                    alignItems: "center",
                    backgroundColor: "white",
                    gap: 1,
                  }}
                >
                  {/* Main Controls Group */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: isMobile ? "100%" : "auto",
                      justifyContent: isMobile ? "space-between" : "flex-start",
                    }}
                  >
                    {/* Play/Pause */}
                    <IconButton onClick={handlePlayPause} size="small">
                      {playing ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>

                    {!isMobile && (
                      <>
                        {/* Previous */}
                        {/* <IconButton size="small">
                          <SkipPreviousIcon />
                        </IconButton> */}

                        {/* Next */}
                        {/* <IconButton size="small">
                          <SkipNextIcon />
                        </IconButton> */}
                      </>
                    )}

                    {/* Time display for mobile */}
                    {isMobile && (
                      <Typography variant="caption" sx={{ mx: 1,  }}>
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </Typography>
                    )}

                    {/* Volume and Fullscreen for mobile */}
                    {isMobile && (
                      <>
                        <IconButton onClick={toggleMute} size="small">
                          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                        </IconButton>
                        <IconButton onClick={handleFullscreen} size="small">
                          <FullscreenIcon />
                        </IconButton>
                      </>
                    )}
                  </Box>

                  {/* Progress Group - on its own row for mobile */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flex: 1,
                      width: isMobile ? "100%" : "auto",
                    }}
                  >
                    {/* Time display for non-mobile */}
                    {/* {!isMobile && (
                      <Typography
                        variant="caption"
                        sx={{ mx: 1, minWidth: "70px",
                        color: "primary.main",

                          }}
                      >
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </Typography>
                    )} */}

                    {/* Progress Slider */}
                    <Slider
                      size="small"
                      value={progress}
                      onChange={handleProgressChange}
                      sx={{
                        mx: 1,
                        flex: 1,
                        color: "primary.main",
                      }}
                    />
                  </Box>

                  {/* Volume and Fullscreen for non-mobile */}
                  {!isMobile && (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {/* Volume */}
                      <IconButton onClick={toggleMute} size="small">
                        {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                      </IconButton>

                      {/* Volume Slider - hide on mobile */}
                      {!isTablet && (
                        <Slider
                          size="small"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          sx={{
                            mx: 1,
                            width: 80,
                            color: "primary.main",
                          }}
                        />
                      )}

                      {/* Fullscreen */}
                      <IconButton onClick={handleFullscreen} size="small">
                        <FullscreenIcon />
                      </IconButton>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>

            {/* Text Content */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{ width: "100%", textAlign: { xs: "center", md: "left" } }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Meet the team
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
