"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "Who is 99 Yards Academy designed for?",
      answer:
        "99 Yards Academy is designed for professionals at all stages of their fashion careers. Whether you're pivoting into the fashion industry, upgrading your skills to advance in your current role, or a seasoned professional aiming to start or grow your own fashion business, our comprehensive online fashion design program, fashion merchandising courses, supply chain management, process optimisation moduals and more provide the practical knowledge and real-world experience needed to succeed. From creating a business plan for your clothing company to mastering fashion marketing and merchandising, 99 Yards Academy supports learners in reaching their career goals",
    },
    {
      question: "What topics and skills can I learn through 99 Yards Academy?",
      answer:
        "At 99 Yards Academy, you'll learn essential skills like creating a clothing company business plan, managing fashion merchandising, and implementing fashion marketing strategies. You'll also gain expertise in areas like brand development, product design, end-to-end process optimization, and supply chain management. Each module is crafted to strengthen your strategic approach, increase sales and profitability, and minimize waste, giving you a comprehensive toolkit to efficiently manage every stage of your fashion business—from concept to consumer.",
    },
    {
      question: "Will I receive a certificate or credential upon completion?",
      answer:
        "At 99 Yards Academy, our focus is on a learn-and-implement approach from the start. Instead of a traditional certification, you'll earn a badge of completion that highlights the practical results and skills you've gained throughout the program. Whether it's mastering fashion merchandising, clothing design, fashion marketing, or creating a business plan for a clothing business, you'll be able to see the real-world impact of what you've learned immediately. This approach is ideal for aspiring entrepreneurs and professionals looking to up-skill and advance in their roles. We also offer Master and Expert-level courses, some of which provide certification through our accredited partners, ensuring your achievements are recognized across the industry",
    },
    {
      question: "How does the app function and what features are included?",
      answer:
        "The 99 Yards Academy app is the best app for fashion designing and professional development, offering tailored study plans based on your individual goals and dynamic, on-demand mobile learning. The app adapts to your schedule and learning style, making it easy to progress at your own pace. You'll gain access to a comprehensive toolkit, including suppliers, vendors, and customizable templates—empowering you to implement what you learn in real time. Plus, the app connects you with seasoned industry mentors, providing valuable guidance to help you build a high-performing assortment, optimize your supply chain, and elevate your career. Whether you're looking to start your own business or enhance your professional skills, the 99 Yards Academy app is designed to support your growth and success every step of the way",
    },
    {
      question: "What are the pricing options for the app?",
      answer:
        "The 99 Yards Academy app offers three distinct learning tiers—Foundational, Master, and Expert—to cater to your unique learning needs and career aspirations Foundational Tier:  This tier covers the end-to-end process of starting and operating a fashion business, including 12 key phases from idea to launch. It's perfect for those looking to gain a comprehensive understanding of the entire fashion business cycle, giving you the essential skills and confidence to turn your ideas into reality Master Tier:  The Master Tier is designed for individuals looking to deepen their expertise in specific areas of the fashion industry, such as supply chain management, fashion marketing, and creating high-performing assortments. With advanced modules and real-world applications, this tier helps you stand out as a specialist in your chosen area Expert Tier:  Tailored for experienced professionals, executives, and business owners aiming to scale their businesses, optimize processes, and drive continuous improvement. The Expert Tier equips you with the tools to lead teams, implement industry best practices, and achieve long-term growth in your organization. Additionally, we offer one-on-one or group coaching and mentorship as add-on options, allowing you to work directly with industry experts for more personalized guidance. Each tier provides a strategic path for growth, empowering you with practical skills and actionable strategies to advance your career or business.",
    },
    {
      question:
        "Who are the instructors and industry experts featured in the program?",
      answer:
        "The instructors and industry experts at 99 Yards Academy are carefully selected professionals with proven success in the fashion industry. Our faculty includes seasoned fashion designers, supply chain specialists, merchandising executives, marketing strategists, and fashion business consultants who have worked with top global brands and startups alike. Each expert brings a wealth of knowledge in areas such as fashion merchandising, clothing design, supply chain management, and fashion marketing. They don't just teach theory—they provide real-world insights and actionable strategies that you can apply immediately. Many have led high-performing teams, developed multi-million dollar product lines, and successfully scaled businesses, making them the ideal mentors to guide your growth. You'll have direct access to these professionals through a combination of video lessons, live Q&A sessions, and optional one-on-one coaching, ensuring you get the personalized support, feedback, and mentorship needed to achieve your career goals.",
    },
    {
      question: "How will this app help me grow my fashion business or career?",
      answer:
        "The 99 Yards Academy app is designed to accelerate your growth by offering the latest courses and content, covering everything from fashion merchandising and marketing to creating a robust business plan for a clothing business. Our curriculum is constantly updated with insights from top fashion merchandising schools and industry leaders, ensuring you stay ahead of industry trends and best practices. With tailored study plans and a dynamic, on-demand learning approach, the app equips you with actionable strategies and real-world skills that you can apply immediately. Whether you're looking to launch your own brand, advance your merchandising expertise, or take your role to the next level in a fashion company, you'll gain access to resources, industry connections, and mentorship opportunities that will propel your success in this highly competitive field",
    },
    {
      question: "How often are new courses or content added to the app?",
      answer:
        "While we're committed to regularly adding top industry knowledge and launching new courses, all learning programs in the 99 Yards Academy app are built with dynamic content. This means that every user contributes to enhancing the program for themselves and future learners. If you complete a course or module and still have questions specific to your situation, you can send us your query, and we'll build additional content or enhance the module to address your needs. This ensures that the learning experience is always evolving and never static. With this unique approach, the content continually grows and adapts to stay relevant to real-world challenges, making your learning journey more impactful and personalized",
    },
    {
      question: "What is the time commitment for each course?",
      answer:
        'The time commitment for each course varies depending on the tier and topic. Our Foundational Tier courses are designed to be completed in as little as 4-6 weeks, while Master and Expert Tier courses may require 8-12 weeks due to their advanced content and practical application. Since we follow a learn-and-implement model, the overall time for each learning path may vary. For example, if you choose the personalized learning plan to start a fashion business, it may take an average of 9-12 months, with the result of launching a successful fashion brand by the end of the program. Alternatively, if you opt for the traditional "learn now, implement later" model, it could take 4-6 weeks to complete all the content, but we don\'t guarantee the same effectiveness. Studies show that without immediate application, over 60% of what you learn tends to be forgotten or not implemented. Our program is designed to support you every step of the way, ensuring your learning translates into real-world success.',
    },
    {
      question: "Can I access the app's content on multiple devices?",
      answer:
        "Yes, you can access the 99 Yards Academy app on multiple devices, including smartphones, tablets, and desktops. This flexibility allows you to learn whenever and wherever it's convenient for you, making it easier to fit your professional development into your daily routine.",
    },
    {
      question: "Is there a community or networking component to the app?",
      answer:
        "Absolutely! The 99 Yards Academy app includes access to a vibrant community of like-minded professionals and industry experts. You'll have opportunities to network, share experiences, and collaborate with peers through discussion forums, group projects, and live sessions. This community aspect enriches your learning experience and expands your professional network",
    },
  ];

  return (
    <Box sx={{ py: 8,  }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 10 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 900,
            mb: 4,
            color: "#333",
          }}
        >
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            elevation={0}
            sx={{
              mb: 1,
              borderRadius: "8px",
              backgroundColor: "#333",
              color: "white",
              "&::before": {
                display: "none",
              },
              "&.Mui-expanded": {
                margin: "0 0 8px 0",
              },
              // Fix for ensuring accordion summary has correct border radius
              "& .MuiAccordionSummary-root": {
                borderRadius: "8px",
                overflow: expanded === `panel${index}` ? "hidden" : "visible",
              },
              // Fix for first accordion
              ...(index === 0 && {
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }),
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "white" }} />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{
                padding: "12px 16px",
                minHeight: "48px",
                borderRadius: expanded === `panel${index}` ? "8px 8px 0 0" : "8px",
                "& .MuiAccordionSummary-content": {
                  margin: "0",
                  "&.Mui-expanded": {
                    margin: "0",
                  },
                },
              }}
            >
              <Typography sx={{ fontWeight: 500, fontSize: "0.95rem" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "white",
                color: "#333",
                padding: "16px 24px",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}