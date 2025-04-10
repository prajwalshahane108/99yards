// LegalPages.js
"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "proxima-nova",
  },
  palette: {
    primary: {
      main: "#6c757d",
    },
  },
});

const LegalPages = () => {
  const [selectedPage, setSelectedPage] = useState("Terms & Conditions");

  const sidebarItems = [
    { text: "Privacy Policies", selected: selectedPage === "Privacy Policies" },
    { text: "Terms & Conditions", selected: selectedPage === "Terms & Conditions" },
    { text: "Help", selected: selectedPage === "Help" },
  ];

  const handlePageChange = (pageName) => {
    if (pageName === "Help") {
      // Redirect to the help page
      window.location.href = "/help";
    } else {
      setSelectedPage(pageName);
    }
  };

  // Render different content based on the selected page
  const renderContent = () => {
    switch (selectedPage) {
      case "Privacy Policies":
        return <PrivacyPolicyContent />;
      case "Terms & Conditions":
        return <TermsConditionsContent />;
      case "Help":
        return <HelpContent />;
      default:
        return <PrivacyPolicyContent />;
    }
  };

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
                height: "100%",
              }}
            >
              <List>
                {sidebarItems.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      pl: 1,
                      cursor: "pointer",
                    }}
                    onClick={() => handlePageChange(item.text)}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: 700,
                        sx: {
                          color: item.selected ? "#dc3545" : "#352f36",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            <Paper elevation={0} sx={{ p: 2 }}>
              {renderContent()}
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
    <Typography
      variant="h5"
      component="h2"
      gutterBottom
      sx={{ fontWeight: "bold", mb: 2 }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const SubSection = ({ title, children }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: "bold" }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const BulletList = ({ items }) => (
  <List dense disablePadding>
    {items.map((item, index) => (
      <ListItem key={index} sx={{ alignItems: "flex-start", pl: 0, py: 0.5 }}>
        <Typography component="div" sx={{ display: "flex" }}>
          <span style={{ marginRight: "8px" }}>•</span>
          <span>{item}</span>
        </Typography>
      </ListItem>
    ))}
  </List>
);

// Content components for each page
const PrivacyPolicyContent = () => (
  <>
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
  </>
);

const TermsConditionsContent = () => (
  <>
    <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
      Terms & Conditions
    </Typography>

    <Section title="Introduction">
      <Typography paragraph>
        Welcome to 99 Yards Academy ("we," "our," "us"). By accessing
        or using our platform, you agree to these Terms of Use
        ("Terms"). These Terms govern your use of our website, mobile
        app, and services (collectively, the "Platform"). Please read
        these Terms carefully. If you do not agree, you must not use
        our services.
      </Typography>
      <Typography paragraph>
        For questions, contact us at [Insert Contact Information].
      </Typography>
    </Section>

    <Section title="1. General Use">
      <Typography paragraph>
        By using the Platform, you agree to
      </Typography>
      <BulletList
        items={[
          <span>Act ethically and with integrity</span>,
          <span>
            Comply with all applicable laws, rules, and regulations
          </span>,
          <span>
            Respect the rights and interests of other users
          </span>,
          <span>
            Provide accurate, truthful, and up-to-date information in
            your profile and interactions.
          </span>,
        ]}
      />
      <Typography paragraph>You must not</Typography>
      <BulletList
        items={[
          <span>Engage in fraudulent activities</span>,
          <span>Abuse confidential information</span>,
          <span>
            Use the Platform for illegal or unauthorized purposes.
          </span>,
        ]}
      />
    </Section>

    <Section title="2. Eligibility">
      <Typography paragraph>
        To use 99 Yards Academy, you must
      </Typography>
      <BulletList
        items={[
          <span>
            Be at least 18 years old or the age of majority in your
            jurisdiction
          </span>,
          <span>
            If under 18 but at least 15 years of age, use the Platform
            only with parental or legal guardian consent, and under
            their supervision.
          </span>,
        ]}
      />

      <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        For Minors (15–17 years)
      </Typography>
      <BulletList
        items={[
          <span>Parental or guardian consent is required</span>,
          <span>
            The parent or guardian is responsible for monitoring the
            minor's use of the Platform and ensuring compliance with
            these Terms
          </span>,
          <span>
            The parent or guardian must accept liability for the
            minor's actions on the Platform.
          </span>,
        ]}
      />

      <Typography paragraph sx={{ mt: 2 }}>
        We reserve the right to suspend or terminate accounts if we
        discover that users under 18 are using the Platform without
        proper consent.
      </Typography>
    </Section>

    <Section title="3. User Conduct">
      <Typography paragraph>
        When using the Platform, you agree to
      </Typography>
      <BulletList
        items={[
          <span>
            Treat all users with respect and professionalism
          </span>,
          <span>
            Not harass, bully, or discriminate against others
          </span>,
          <span>
            Refrain from posting harmful, obscene, or illegal content
          </span>,
          <span>
            Avoid sharing false, misleading, or defamatory
            information.
          </span>,
        ]}
      />

      <Typography paragraph>You must not</Typography>
      <BulletList
        items={[
          <span>Falsify your identity or impersonate others</span>,
          <span>
            Solicit or process payments outside the Platform
          </span>,
          <span>
            Post content that infringes on intellectual property
            rights or violates any laws.
          </span>,
        ]}
      />
    </Section>

    <Section title="4. User-Generated Content">
      <Typography paragraph>
        You are responsible for all content you upload or post on the
        Platform. By submitting content, you grant 99 Yards Academy a
        non-exclusive, royalty-free, worldwide license to use,
        display, and distribute your content solely for the purpose of
        providing our services
      </Typography>

      <Typography paragraph>
        You agree not to upload content that
      </Typography>
      <BulletList
        items={[
          <span>
            Infringes on copyrights, trademarks, or intellectual
            property rights
          </span>,
          <span>
            Contains viruses, malware, or harmful programming routines
          </span>,
          <span>
            Violates privacy rights or contains personal information
            without consent
          </span>,
          <span>
            Harms the reputation of 99 Yards Academy or its users.
          </span>,
        ]}
      />
    </Section>

    <Section title="5. Confidentiality and Privacy">
      <Typography paragraph>
        We are committed to protecting user confidentiality. You must
        not
      </Typography>
      <BulletList
        items={[
          <span>
            Share or disclose private information obtained through the
            Platform without consent
          </span>,
          <span>
            Use information obtained through the Platform for
            unauthorized purposes.
          </span>,
        ]}
      />
    </Section>

    <Section title="6. Payments">
      <Typography paragraph>
        All payments must be processed through the Platform. You agree
        to
      </Typography>
      <BulletList
        items={[
          <span>
            Comply with all payment obligations associated with your
            use of the Platform
          </span>,
          <span>
            Not facilitate money exchange, including cryptocurrency
            transactions, outside the Platform.
          </span>,
        ]}
      />

      <Typography paragraph>
        Failure to comply with payment obligations may result in
        account suspension or termination.
      </Typography>
    </Section>

    <Section title="7. Intellectual Property">
      <Typography paragraph>
        All content provided by 99 Yards Academy, including but not
        limited to courses, videos, text, graphics, logos, and
        software, is protected by intellectual property laws. You may
        not
      </Typography>
      <BulletList
        items={[
          <span>
            Reproduce, distribute, or modify any content without our
            prior written consent
          </span>,
          <span>
            Use our trademarks, logos, or branding without
            authorization.
          </span>,
        ]}
      />
    </Section>

    <Section title="8. Instructors' Responsibilities">
      <Typography paragraph>
        If you are an instructor on 99 Yards Academy, you agree to
      </Typography>
      <BulletList
        items={[
          <span>
            Provide accurate and truthful information about your
            qualifications and expertise
          </span>,
          <span>
            Deliver high-quality, original content that complies with
            intellectual property laws
          </span>,
          <span>
            Ensure your course content is accurate, up-to-date, and
            relevant to your audience
          </span>,
          <span>
            Respond to user inquiries in a timely and professional
            manner
          </span>,
          <span>
            Comply with all Platform guidelines, including pricing,
            refunds, and content standards.
          </span>,
        ]}
      />

      <Typography paragraph>You must not</Typography>
      <BulletList
        items={[
          <span>Copy or plagiarize content from other sources</span>,
          <span>
            Promote unrelated services or products within your courses
          </span>,
          <span>
            Share private student data obtained through the Platform
            without explicit consent.
          </span>,
        ]}
      />

      <Typography paragraph>
        Failure to comply may result in content removal, account
        suspension, or termination.
      </Typography>
    </Section>

    <Section title="9. Communication and Interactions">
      <Typography paragraph>
        When interacting on the Platform, you agree to
      </Typography>
      <BulletList
        items={[
          <span>
            Avoid personal attacks, inappropriate language, and
            unprofessional conduct
          </span>,
          <span>
            Use the Platform's communication tools for all
            interactions and not request private contact details from
            other users.
          </span>,
        ]}
      />
    </Section>

    <Section title="10. Prohibited Activities">
      <Typography paragraph>
        You may not use the Platform to
      </Typography>
      <BulletList
        items={[
          <span>
            Engage in illegal activities, such as money laundering or
            identity theft
          </span>,
          <span>
            Create multiple accounts or use the Platform to generate
            false reviews or feedback
          </span>,
          <span>
            Spam or advertise unrelated products or services
          </span>,
          <span>
            Bid on projects you do not intend to complete or underbid
            to avoid fees.
          </span>,
        ]}
      />
    </Section>

    <Section title="11. Termination and Account Suspension">
      <Typography paragraph>
        We reserve the right to suspend or terminate your account if
        you violate these Terms or engage in harmful behavior.
        Termination may occur without notice and at our sole
        discretion.
      </Typography>
    </Section>

    <Section title="12. Limitation of Liability">
      <Typography paragraph>
        To the fullest extent permitted by law, 99 Yards Academy will
        not be liable for
      </Typography>
      <BulletList
        items={[
          <span>Indirect, incidental, or consequential damages</span>,
          <span>
            Loss of data, revenue, or profits arising from your use of
            the Platform
          </span>,
          <span>
            Unauthorized access to your account due to your failure to
            secure login credentials.
          </span>,
        ]}
      />
    </Section>

    <Section title="13. Indemnification">
      <Typography paragraph>
        You agree to indemnify and hold 99 Yards Academy harmless from
        any claims, damages, or expenses arising from
      </Typography>
      <BulletList
        items={[
          <span>Your use of the Platform</span>,
          <span>Your violation of these Terms</span>,
          <span>Your infringement of any third-party rights.</span>,
        ]}
      />
    </Section>

    <Section title="14. Dispute Resolution">
      <Typography paragraph>
        In the event of a dispute, you agree to
      </Typography>
      <BulletList
        items={[
          <span>
            First attempt to resolve the issue informally by
            contacting us at [Insert Contact Information]
          </span>,
          <span>
            Submit to binding arbitration under the jurisdiction of
            [Insert Relevant Jurisdiction], unless prohibited by local
            laws.
          </span>,
        ]}
      />
    </Section>

    <Section title="15. Changes to These Terms">
      <Typography paragraph>
        We may update these Terms periodically to reflect changes in
        our policies or services. Significant updates will be
        communicated via email or a prominent notice on our Platform.
        Continued use of the Platform after updates constitutes
        acceptance of the revised Terms.
      </Typography>
    </Section>

    <Section title="16. Governing Law">
      <Typography paragraph>
        We may update these Terms periodically to reflect changes in
        our policies or services. Significant updates will be
        communicated via email or a prominent notice on our Platform.
        Continued use of the Platform after updates constitutes
        acceptance of the revised Terms.
      </Typography>
    </Section>

    <Section title="17. Contact Us">
      <Typography paragraph>
        If you have questions or need support, contact us at:
      </Typography>
      <Typography paragraph>[Insert Email Address]</Typography>
      <Typography paragraph>[Insert Mailing Address]</Typography>
    </Section>
  </>
);

// We no longer need the HelpContent component since we're redirecting
// But we'll keep an empty component in case the route changes and we need to render something
const HelpContent = () => null;

export default LegalPages;