// PrivacyPolicy.js
'use client';
import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Paper, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#6c757d',
    },
  },
});

const sidebarItems = [
  { text: 'Privacy Policies', selected: true },
  { text: 'Terms & Conditions', selected: false },
  { text: 'Help', selected: false },
];

const PrivacyPolicy = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 2, 
                borderRight: { md: '1px solid #e0e0e0' },
                height: '100%',
              }}
            >
              <List>
                {sidebarItems.map((item, index) => (
                  <ListItem 
                    key={index} 
                    sx={{ 
                      pl: 1, 
                      color: item.selected ? '#dc3545' : 'inherit',
                      fontWeight: item.selected ? 'bold' : 'normal',
                    }}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            <Paper elevation={0} sx={{ p: 2 }}>
              <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
                Privacy Policies
              </Typography>

              <Section title="Introduction">
                <Typography paragraph>
                  Welcome to 99 Yards Academy ("we," "our," "us"). We are committed to protecting your privacy and ensuring transparency 
                  about how we collect, use, and safeguard your information. This Privacy Policy applies to all users of our platform and 
                  services. By accessing or using 99 Yards Academy, you agree to the practices outlined in this policy.
                </Typography>
                <Typography paragraph>
                  For questions, contact us at [Insert Contact Information].
                </Typography>
              </Section>

              <Section title="1. Information We Collect">
                <Typography paragraph>
                  We collect information to provide, improve, and personalize our services.
                </Typography>
                
                <SubSection title="1.1 Personal Information">
                  <Typography paragraph>
                    This includes:
                  </Typography>
                  <BulletList items={[
                    <span><strong>Account Information:</strong> Name, email address, username, password, and profile details.</span>,
                    <span><strong>Payment Details:</strong> Billing information and payment methods (processed by third-party providers like Stripe).</span>,
                    <span><strong>Interaction Data:</strong> Courses accessed, progress, assignments completed, and other learning activities.</span>,
                    <span><strong>Marketing Preferences:</strong> Information related to your participation in promotions or surveys.</span>
                  ]} />
                </SubSection>

                <SubSection title="1.2 Non-Personal Information">
                  <Typography paragraph>
                    This includes:
                  </Typography>
                  <BulletList items={[
                    <span><strong>Device data</strong> (e.g., IP address, browser type, operating system).</span>,
                    <span><strong>Platform usage data</strong> (e.g., session durations, page views, referral sources).</span>
                  ]} />
                </SubSection>

                <SubSection title="1.3 Sensitive Information">
                  <Typography paragraph>
                    We may collect sensitive data (e.g., certifications, qualifications) with explicit user consent when required for specific
                    features or services.
                  </Typography>
                </SubSection>

                <SubSection title="1.4 Cookies and Tracking Technologies">
                  <Typography paragraph>
                    We use cookies, pixels, and similar tools to:
                  </Typography>
                  <BulletList items={[
                    <span>Enhance platform functionality and user experience.</span>,
                    <span>Analyze traffic and platform performance.</span>,
                    <span>Deliver personalized recommendations and advertisements.</span>
                  ]} />
                  <Typography paragraph>
                    Users can manage cookies via browser settings.
                  </Typography>
                </SubSection>
              </Section>

              <Section title="2. How We Use Your Information">
                <Typography paragraph>
                  Your data is used for the following purposes:
                </Typography>
                <BulletList items={[
                  <span><strong>Platform Operations:</strong> To provide, maintain, and improve our services.</span>,
                  <span><strong>Personalization:</strong> To recommend courses and resources tailored to your interests.</span>,
                  <span><strong>Payments:</strong> To securely process transactions.</span>,
                  <span><strong>Communication:</strong> To send updates, newsletters, and promotional content (opt-out available).</span>,
                  <span><strong>Compliance:</strong> To comply with legal and regulatory requirements.</span>,
                  <span><strong>Analytics:</strong> To improve platform performance and user satisfaction using aggregated, anonymized data.</span>
                ]} />
              </Section>

              <Section title="3. How We Share Your Information">
                <Typography paragraph>
                  We do not sell or rent personal data. However, we may share information:
                </Typography>
                <BulletList items={[
                  <span><strong>With Service Providers:</strong> Payment processors, hosting providers, analytics tools, and email marketing platforms.</span>,
                  <span><strong>For Legal Compliance:</strong> To respond to lawful requests, subpoenas, or court orders.</span>,
                  <span><strong>With Instructors:</strong> Anonymized learner data may be shared to track course performance and engagement.</span>,
                  <span><strong>For Business Transactions:</strong> In the event of a merger, acquisition, or sale of assets (users will be notified).</span>
                ]} />
              </Section>

              <Section title="4. User-Generated Content">
                <BulletList items={[
                  <span>Users retain ownership of content uploaded to the platform.</span>,
                  <span>By uploading content, users grant 99 Yards Academy a non-exclusive license to use, display, and distribute the content 
                  as necessary for service delivery.</span>,
                  <span>Confidentiality is maintained for sensitive user-uploaded data.</span>
                ]} />
              </Section>

              <Section title="5. Confidentiality and Privacy">
                <Typography paragraph>
                  We are committed to maintaining user confidentiality:
                </Typography>
                <BulletList items={[
                  <span><strong>Data Access:</strong> Information is accessed only as required for service delivery or legal obligations.</span>,
                  <span><strong>No Disclosure:</strong> We do not disclose user data without consent unless required by law.</span>
                ]} />
              </Section>

              <Section title="6. Behavioral Tracking and Advertising">
                <Typography paragraph>
                  We use cookies, session analytics, and heatmaps to monitor user behavior and improve the platform.
                </Typography>
                <BulletList items={[
                  <span>Data may be used for targeted marketing or remarketing campaigns.</span>,
                  <span>Users can opt out of personalized advertising via account settings or by contacting us.</span>
                ]} />
              </Section>

              <Section title="7. Fraud Prevention">
                <Typography paragraph>
                  Users are prohibited from:
                </Typography>
                <BulletList items={[
                  <span>Engaging in fraudulent activities, such as creating multiple accounts or misrepresenting identity.</span>,
                  <span>Using the platform to facilitate unauthorized financial transactions.</span>
                ]} />
              </Section>

              <Section title="8. Data Security">
                <Typography paragraph>
                  We implement industry-standard measures to safeguard user information:
                </Typography>
                <BulletList items={[
                  <span><strong>Encryption:</strong> All data is encrypted during transmission.</span>,
                  <span><strong>Secure Storage:</strong> Data is stored on servers protected by firewalls and restricted access controls.</span>,
                  <span><strong>Audits:</strong> Regular audits and system updates ensure data integrity and security.</span>
                ]} />
                <Typography paragraph>
                  While we strive for robust protection, no system is entirely secure. Users are encouraged to maintain strong passwords and
                  report suspicious activity.
                </Typography>
              </Section>

              <Section title="9. Your Rights">
                <Typography paragraph>
                  Depending on your location, you may have the right to:
                </Typography>
                <BulletList items={[
                  <span><strong>Access and Correct Data:</strong> View and update your personal information.</span>,
                  <span><strong>Request Deletion:</strong> Request that your data be deleted, subject to legal or operational requirements.</span>,
                  <span><strong>Opt-Out:</strong> Decline targeted marketing communications.</span>,
                  <span><strong>Data Portability:</strong> Receive a copy of your data in a portable format.</span>
                ]} />
                <Typography paragraph>
                  To exercise these rights, contact us at [Insert Contact Information].
                </Typography>
              </Section>

              <Section title="10. Compliance with Global Privacy Standards">
                <Typography paragraph>
                  99 Yards Academy complies with privacy laws, including:
                </Typography>
                <BulletList items={[
                  <span><strong>GDPR (EU):</strong> Offering data access, correction, and deletion rights.</span>,
                  <span><strong>CCPA (California):</strong> Ensuring transparency in data use and offering opt-out rights for California residents.</span>,
                  <span><strong>LGPD (Brazil) and PIPEDA (Canada):</strong> Compliant where applicable.</span>
                ]} />
              </Section>

              <Section title="11. Children's Privacy">
                <Typography paragraph>
                  We do not knowingly collect personal information from users under 13 years of age. If we discover such data, it will be
                  deleted promptly.
                </Typography>
              </Section>

              <Section title="12. Third-Party Links and Services">
                <Typography paragraph>
                  The platform may link to external websites or services. We are not responsible for their privacy practices. Users are
                  encouraged to review third-party privacy policies.
                </Typography>
              </Section>

              <Section title="13. Dispute Resolution">
                <Typography paragraph>
                  Disputes related to this Privacy Policy will be resolved through binding arbitration under the jurisdiction of [Insert Relevant
                  Jurisdiction], unless prohibited by local laws.
                </Typography>
              </Section>

              <Section title="14. Updates to This Privacy Policy">
                <Typography paragraph>
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Users will be
                  notified of significant updates via email or a prominent platform announcement.
                </Typography>
              </Section>

              <Section title="15. Contact Us">
                <Typography paragraph>
                  For questions, concerns, or to exercise your privacy rights, contact us at:
                </Typography>
                <Typography paragraph>
                  [Insert Email Address]
                </Typography>
                <Typography paragraph>
                  [Insert Mailing Address]
                </Typography>
              </Section>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

// Helper Components
const Section = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const SubSection = ({ title, children }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const BulletList = ({ items }) => (
  <List dense disablePadding>
    {items.map((item, index) => (
      <ListItem key={index} sx={{ alignItems: 'flex-start', pl: 0, py: 0.5 }}>
        <Typography component="div" sx={{ display: 'flex' }}>
          <span style={{ marginRight: '8px' }}>•</span>
          <span>{item}</span>
        </Typography>
      </ListItem>
    ))}
  </List>
);

export default PrivacyPolicy;