// "use client";

// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
// import Image from 'next/image';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

// export default function LearningGoalsSection() {
//   return (
//     <Box sx={{ py: 8, backgroundColor: '#f7f5f1' }}>
//       <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 8 } }}>
//         <Typography 
//           variant="h4" 
//           component="h2" 
//           sx={{ 
//             fontWeight: 900, 
//             mb: 4,
//             color: '#333',
//           }}
//         >
//           Learning Focused on Your Goals
//         </Typography>
        
//         <Grid container spacing={3}>
//           {/* Row 1 */}
//           <Grid item xs={12} md={6}>
//             <Card 
//               sx={{ 
//                 height: '100%', 
//                 borderRadius: '8px',
//                 boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
//                 display: 'flex',
//                 flexDirection: 'column',
//               }}
//             >
//               <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
//                   <AttachMoneyIcon sx={{ color: '#333', fontSize: 28, mr: 1 }} />
//                   <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
//                     Affordable learning
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ color: '#555', mb: 0, lineHeight: 1.6 }}>
//                   Unlike many fashion programs, 99 Yards Academy strives for quality education's accessibility. Our online fashion design program combines exciting workshops and masterclasses at merely nominal, including courses like textural merchandising, fashion marketing, and how to elevate to leading fashion buyer positions.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Card 
//               sx={{ 
//                 height: '100%', 
//                 borderRadius: '8px',
//                 boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
//                 overflow: 'hidden',
//                 display: 'flex',
//                 p: 0,
//               }}
//             >
//               <Box sx={{ width: '100%', position: 'relative', height: '100%', minHeight: 220 }}>
//                 <Image
//                   src="/fashion-designer.png"
//                   alt="Students learning together"
//                   fill
//                   style={{ objectFit: 'cover' }}
//                 />
//               </Box>
//             </Card>
//           </Grid>

//           {/* Row 2 */}
//           <Grid item xs={12} md={6}>
//             <Card 
//               sx={{ 
//                 height: '100%', 
//                 borderRadius: '8px',
//                 boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
//                 overflow: 'hidden',
//                 display: 'flex',
//                 p: 0,
//               }}
//             >
//               <Box sx={{ width: '100%', position: 'relative', height: '100%', minHeight: 220 }}>
//                 <Image
//                   src="/fashion-designer.png"
//                   alt="Fashion sketching"
//                   fill
//                   style={{ objectFit: 'cover' }}
//                 />
//               </Box>
//             </Card>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Card 
//               sx={{ 
//                 height: '100%', 
//                 borderRadius: '8px',
//                 boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
//                 display: 'flex',
//                 flexDirection: 'column',
//               }}
//             >
//               <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
//                   <MenuBookIcon sx={{ color: '#333', fontSize: 28, mr: 1 }} />
//                   <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
//                     Personalized study plan
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ color: '#555', mb: 0, lineHeight: 1.6 }}>
//                   Whether you're interested in designing clothing, merchandising, or marketing, we've got you covered for any fashion education you desire. At your convenience, making our tools as user-interactive and effective ways to fashion direction.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Row 3 */}
//           <Grid item xs={12} md={6}>
//             <Card 
//               sx={{ 
//                 height: '100%', 
//                 borderRadius: '8px',
//                 boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
//                 display: 'flex',
//                 flexDirection: 'column',
//               }}
//             >
//               <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
//                   <EditNoteIcon sx={{ color: '#333', fontSize: 28, mr: 1 }} />
//                   <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
//                     Practical learning journey
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ color: '#555', mb: 0, lineHeight: 1.6 }}>
//                   With hands-on experience with real-world fashion industry challenges, participants learn to create compelling portfolios, develop a winning business strategy, cultivate an impactful fashion line adapted for industry's dynamic demands.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Card 
//               sx={{ 
//                 height: '100%', 
//                 borderRadius: '8px',
//                 boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
//                 overflow: 'hidden',
//                 display: 'flex',
//                 p: 0,
//               }}
//             >
//               <Box sx={{ width: '100%', position: 'relative', height: '100%', minHeight: 220 }}>
//                 <Image
//                   src="/fashion-designer.png"
//                   alt="Student learning online"
//                   fill
//                   style={{ objectFit: 'cover' }}
//                 />
//               </Box>
//             </Card>
//           </Grid>

//           {/* Row 4 */}
//           <Grid item xs={12} md={6}>
//             <Card 
//               sx={{ 
//                 height: '100%', 
//                 borderRadius: '8px',
//                 boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
//                 overflow: 'hidden',
//                 display: 'flex',
//                 p: 0,
//               }}
//             >
//               <Box sx={{ width: '100%', position: 'relative', height: '100%', minHeight: 220 }}>
//                 <Image
//                   src="/fashion-designer.png"
//                   alt="Mentorship session"
//                   fill
//                   style={{ objectFit: 'cover' }}
//                 />
//               </Box>
//             </Card>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Card 
//               sx={{ 
//                 height: '100%', 
//                 borderRadius: '8px',
//                 boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
//                 display: 'flex',
//                 flexDirection: 'column',
//               }}
//             >
//               <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
//                   <SupervisorAccountIcon sx={{ color: '#333', fontSize: 28, mr: 1 }} />
//                   <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
//                     Mentorship programs
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ color: '#555', mb: 0, lineHeight: 1.6 }}>
//                   At 99 Yards Academy we collaborate with industry professionals to deliver personalized guidance through project. Whether you're working on a fashion start-up or looking to sharpen your skills as apparel business, our custom-available guidance is there for your success.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

"use client";

import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export default function LearningGoalsSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f7f5f1' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 700, 
            mb: 4,
            color: '#333',
          }}
        >
          Learning Focused on Your Goals
        </Typography>
        
        <Grid container spacing={3}>
          {/* Row 1 */}
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: '8px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ mb: 2 }}>
                  <Box 
                    sx={{ 
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 40,
                      height: 40,
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0',
                      mb: 2
                    }}
                  >
                    <AttachMoneyIcon sx={{ color: '#333', fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                    Affordable learning
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#555', mb: 0, lineHeight: 1.6 }}>
                  Unlike many fashion programs, 99 Yards Academy strives for quality education's accessibility. Our online fashion design program combines exciting workshops and masterclasses at merely nominal, including courses like textural merchandising, fashion marketing, and how to elevate to leading fashion buyer positions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: '8px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'flex',
                p: 0,
              }}
            >
              <Box sx={{ width: '100%', position: 'relative', height: '100%', minHeight: 220 }}>
                <Image
                  src="/fashion-designer.png"
                  alt="Students learning together"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Card>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: '8px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'flex',
                p: 0,
              }}
            >
              <Box sx={{ width: '100%', position: 'relative', height: '100%', minHeight: 220 }}>
                <Image
                  src="/fashion-designer.png"
                  alt="Fashion sketching"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: '8px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ mb: 2 }}>
                  <Box 
                    sx={{ 
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 40,
                      height: 40,
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0',
                      mb: 2
                    }}
                  >
                    <MenuBookIcon sx={{ color: '#333', fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                    Personalized study plan
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#555', mb: 0, lineHeight: 1.6 }}>
                  Whether you're interested in designing clothing, merchandising, or marketing, we've got you covered for any fashion education you desire. At your convenience, making our tools as user-interactive and effective ways to fashion direction.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Row 3 */}
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: '8px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ mb: 2 }}>
                  <Box 
                    sx={{ 
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 40,
                      height: 40,
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0',
                      mb: 2
                    }}
                  >
                    <EditNoteIcon sx={{ color: '#333', fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                    Practical learning journey
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#555', mb: 0, lineHeight: 1.6 }}>
                  With hands-on experience with real-world fashion industry challenges, participants learn to create compelling portfolios, develop a winning business strategy, cultivate an impactful fashion line adapted for industry's dynamic demands.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: '8px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'flex',
                p: 0,
              }}
            >
              <Box sx={{ width: '100%', position: 'relative', height: '100%', minHeight: 220 }}>
                <Image
                  src="/fashion-designer.png"
                  alt="Student learning online"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Card>
          </Grid>

          {/* Row 4 */}
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: '8px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'flex',
                p: 0,
              }}
            >
              <Box sx={{ width: '100%', position: 'relative', height: '100%', minHeight: 220 }}>
                <Image
                  src="/fashion-designer.png"
                  alt="Mentorship session"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: '8px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ mb: 2,  }}>
                  {/* <Box 
                    sx={{ 
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: "20%",
                      height: 80,
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0',
                      mb: 2,
                    }}
                  >
                    <SupervisorAccountIcon sx={{ color: '#333', fontSize: 24 }} />
                  </Box> */}
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                    Mentorship programs
                  </Typography>
                </Box>
                <Box sx={{ 
                flexDirection: 'row',
                 }}>
                <Box 
                    sx={{ 
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: "20%",
                      height: 80,
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0',
                      mb: 2,
                    }}
                  >
                    <SupervisorAccountIcon sx={{ color: '#333', fontSize: 24 }} />
                  </Box>

                <Typography variant="body2" sx={{ color: '#555', mb: 0, lineHeight: 1.6 }}>
                  At 99 Yards Academy we collaborate with industry professionals to deliver personalized guidance through project. Whether you're working on a fashion start-up or looking to sharpen your skills as apparel business, our custom-available guidance is there for your success.
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