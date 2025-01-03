import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import Title from "@/components/Title";
import BookIcon from "@mui/icons-material/Book";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

const footerContent = {
  protocols: {
    title: "Access",
    links: [
      { title: "Student" },
      { title: "Teaching Staff" },
      { title: "Training and Placement Cell" },
    ],
  },
  governance: {
    title: "Employers",
    links: [
      { title: "2023 Employers" },
      { title: "2022 Employers" },
      { title: "2021 Employers" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { title: "Help center" },

      { title: "Bug report", subtitle: "by Hacker one" },
      { title: "Contacts" },
      { title: "FnQ" },
    ],
  },
  developers: {
    title: "Documentations",
    links: [{ title: "About Project" }, { title: "Source Code" }],
  },
  subscribe: {
    title: "Join our socials to get updates regularly",
    subtitle: "Get the latest news and updates",
  },
  socials: [
    { icon: BookIcon },
    { icon: RedditIcon },
    { icon: TwitterIcon },
    { icon: ChatIcon },
    { icon: TelegramIcon },
    { icon: GitHubIcon },
  ],
  copyright: {
    left: "CareerBoost",
    center: "© 2024 CareerBoost, All Rights Reserved.",
  },
};

const {
  subscribe,
  protocols,
  governance,
  support,
  developers,
  copyright,
  socials,
} = footerContent;

const LinkSection = ({ title, links }) => (
  <Stack spacing={2.5}>
    <Title>{title}</Title>

    {links.map(({ title }) => (
      <Typography
        key={title}
        variant="body2"
        color="text.secondary"
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {title}
      </Typography>
    ))}
  </Stack>
);

const Footer = () => {
  return (
    <Box>
      <Divider sx={{ mb: 10 }} />

      <Container>
        <Grid container spacing={8} flexWrap="wrap-reverse">
          {/* Links */}
          <Grid item xs={12} md={6} lg={7} xl={8}>
            <Grid container spacing={2}>
              {/* Protocols */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...protocols} />
              </Grid>

              {/* Governance */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...governance} />
              </Grid>

              {/* Support */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...support} />
              </Grid>

              {/* Developers */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...developers} />
              </Grid>
            </Grid>
          </Grid>

          {/* Subscribe */}
          <Grid item xs={12} md={6} lg={5} xl={4}>
            <Stack>
              <Title sx={{ mb: 1 }}>{subscribe.title}</Title>

              <Typography variant="body2" color="text.secondary">
                {subscribe.subtitle}
              </Typography>

              {/* <OutlinedButton arrow sx={{ height: 60, my: 3 }}>
                  Subscribe
                </OutlinedButton> */}

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                {socials.map((item, i) => (
                  <IconButton key={i}>
                    <item.icon />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 5 }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ pb: 6 }}
        >
          <Typography variant="body2" color="text.secondary">
            {copyright.left}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {copyright.center}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
