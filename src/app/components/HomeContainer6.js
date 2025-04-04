// "use client";

// import React from "react";
// import { Box, Typography, Container, Grid } from "@mui/material";
// import Image from "next/image";

// export default function FeaturedInSection() {
//   const featuredLogos = [
//     { name: "FIT", src: "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" },
//     { name: "Parsons", src: "/parsons-logo.png" },
//     { name: "SCAD", src: "/scad-logo.png" },
//     { name: "Art Institute", src: "/ai-logo.png" },
//     { name: "Otis College", src: "/otis-logo.png" },
//     { name: "FIDM", src: "/fidm-logo.png" },
//     { name: "UNT", src: "/unt-logo.png" },
//   ];

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         py: 6,
//         backgroundColor: "#2d2b2e", // Dark background
//       }}
//     >
//       <Container maxWidth="lg">
//         <Typography
//           variant="h3"
//           component="h2"
//           sx={{
//             fontWeight: 700,
//             color: "white",
//             mb: 4,
//             textAlign: "left",
//             ml: { xs: 2, md: 0 }
//           }}
//         >
//           Featured In
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: { xs: "center", md: "space-between" },
//             alignItems: "center",
//             gap: 2,
//           }}
//         >
//           {featuredLogos.map((logo, index) => (
//             <Box
//               key={index}
//               sx={{
//                 position: "relative",
//                 width: 100,
//                 height: 100,
//                 borderRadius: "50%",
//                 overflow: "hidden",
//                 backgroundColor: "white",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 mx: { xs: 1, md: 0 },
//                 mb: { xs: 2, md: 0 },
//               }}
//             >
//               <Image
//                 src={logo.src}
//                 alt={`${logo.name} logo`}
//                 width={80}
//                 height={80}
//                 style={{
//                   objectFit: "contain",
//                 }}
//               />
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }
"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
// Note: We're using regular img tag to handle external URLs
// instead of Next.js Image component

export default function FeaturedInSection() {
  const schoolNames = [
    "FIT", 
    "Parsons", 
    "SCAD", 
    "Art Institute", 
    "Otis College", 
    "FIDM", 
    "UNT"
  ];

  // Using the same external image for all logos
  const logoUrl = "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png";

  return (
    <Box
      sx={{
        width: "100%",
        py: 6,
        backgroundColor: "#2d2b2e", // Dark background
      }}
    >
     <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 8 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "white",
            mb: 4,
            textAlign: "left",
            ml: { xs: 2, md: 0 }
          }}
        >
           Loved by students from
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            gap: 2,
          }}
        >
          {schoolNames.map((name, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: 100,
                height: 100,
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: { xs: 1, md: 0 },
                mb: { xs: 2, md: 0 },
              }}
            >
              {/* Using standard img tag for external URL */}
              <img
                src={logoUrl}
                alt={`${name} logo`}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}