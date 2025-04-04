'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  IconButton,
  styled 
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styled components
const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#282421',
  padding: theme.spacing(6, 0),
  color: '#ffffff',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  background: 'linear-gradient(to right, #f39c12, #e74c3c)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(1),
}));

const SectionText = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  textAlign: 'center',
  maxWidth: '300px',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
}));

const BecomeAuthorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#e6e048',
  color: '#000000',
  fontWeight: 'bold',
  padding: '10px 16px',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#d4cf45',
  },
  textTransform: 'none',
}));

const TeamMemberCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#d1d1d1',
  height: '100%',
  borderRadius: '4px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

const TeamMemberName = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginTop: theme.spacing(1),
  color: '#000000',
}));

const TeamMemberBio = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  color: '#000000',
  flexGrow: 1,
}));

const ViewPostsButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#e6e048',
  color: '#000000',
  fontSize: '0.75rem',
  padding: '4px 10px',
  borderRadius: '16px',
  alignSelf: 'flex-end',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#d4cf45',
  },
}));

const MemberImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  marginBottom: theme.spacing(1),
}));

const SocialLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',
  paddingTop: theme.spacing(1),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#666',
  padding: '6px',
  '&:hover': {
    color: '#000',
  },
}));

const TeamSection = () => {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: 'Manish Balakrishnan',
      image: '/team/manish.jpg',
      bio: 'Manish is Veteran Technology entrepreneur who has been leading Technology and Marketing leadership teams across domains. He runs his own Startup consulting company as well as web and app development company.',
      background: '#d1d1d1',
    },
    {
      id: 2,
      name: 'Aishah Shukor',
      image: '/team/aishah.jpg',
      bio: '',
      background: '#fad1d8',
    },
    {
      id: 3,
      name: 'Joel Juma',
      image: '/team/joel.jpg',
      bio: 'SaaS Founder and Startup enthusiast promoting startups and investment into Africa. Joel writes about SaaS sales and growth hacking.',
      background: '#f5f0d0',
    },
    {
      id: 4,
      name: 'Adriana Peterson',
      image: '/team/adriana.jpg',
      bio: 'Adriana has a background in Social Media Marketing, Video Editing, Content Writing and overall Marketing Strategy. At SaaS Journal she is responsible for growth hacking and social media but also heavily involved in content curation, partnership & alliances',
      background: '#d1d1d1',
    },
    {
      id: 5,
      name: 'Sergio Mamani',
      image: '/team/sergio.jpg',
      bio: 'Angel investor and SaaS EdTech Founder who rights about all things SaaS including early SaaS funding, hiring within SaaS as well as financial planning within SaaS',
      background: '#fad1d8',
    },
  ];

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Title and intro section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <SectionTitle variant="h1">
                Our Amazing Team
              </SectionTitle>
              <SectionText variant="body1">
                Writing result oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action
              </SectionText>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <BecomeAuthorButton variant="contained">
                  Become An Author
                </BecomeAuthorButton>
              </Box>
            </Box>
          </Grid>
          
          {/* Team members grid */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} key={member.id} sx={{ mb: 3 }}>
                  <TeamMemberCard sx={{ backgroundColor: member.background }}>
                    <MemberImage 
                      src={member.image} 
                      alt={member.name} 
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <TeamMemberName variant="h2">
                        {member.name}
                      </TeamMemberName>
                      <ViewPostsButton size="small">
                        View Posts
                      </ViewPostsButton>
                    </Box>
                    <TeamMemberBio variant="body2">
                      {member.bio}
                    </TeamMemberBio>
                    <SocialLinksBox>
                      <SocialIconButton size="small" aria-label="Twitter">
                        <TwitterIcon />
                      </SocialIconButton>
                      <SocialIconButton size="small" aria-label="LinkedIn">
                        <LinkedInIcon />
                      </SocialIconButton>
                    </SocialLinksBox>
                  </TeamMemberCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default TeamSection;