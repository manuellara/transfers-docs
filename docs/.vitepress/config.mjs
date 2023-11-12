import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Transfers",
  description: "Transfers Documentation Site",
  themeConfig: {

    externalLinkIcon: true,

    logo: {
      light: "/assets/undraw-google-docs-light.svg",
      dark: "/assets/undraw-google-docs-dark.svg",
    },

    nav: [
      { text: "Districts", link: "/districts/getting-started" },
      { text: "Parents", link: "/parents/getting-started" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "What is Transfers?",
            link: "/introduction/what-is-transfers",
          },
          {
            text: "Features",
            link: "/introduction/features",
          },
          {
            text: "Customers",
            link: "/introduction/customers",
          },
        ],
      },

      {
        text: "Districts",
        items: [
          {
            text: "Getting Started",
            link: "/districts/getting-started",
          },
        ],
      },

      {
        text: "Parents",
        items: [
          {
            text: "Getting Started",
            link: "/parents/getting-started",
          },
        ],
      },

      {
        text: "Product",
        items: [
          {
            text: "Dashboard",
            link: "https://buymeacoffee.com/manuellara",
          },
          {
            text: "Status",
            link: "https://buymeacoffee.com/manuellara",
          },
        ],
      },

      {
        text: "Team",
        link: "/team",
      },
      {
        text: "Pricing",
        link: "https://buymeacoffee.com/manuellara",
      },
      {
        text: "Feedback",
        link: "https://buymeacoffee.com/manuellara",
      },
      {
        text: "Privacy",
        link: "/privacy",
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Lara-Laboratories" },
      { icon: "slack", link: "https://github.com/Lara-Laboratories" },
    ],

    footer: {
      // message: 'Released under the AGPL3 License.',
      copyright: "Copyright © 2023-present Lara Laboratories",
    },

    lastUpdated: true,

    editLink: {
      pattern:
        "https://github.com/Lara-Laboratories/transfers-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
