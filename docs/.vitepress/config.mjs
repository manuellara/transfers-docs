import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Transfers",
  description: "Transfers docs",
  head: [
    ["link", { rel: "icon", href: "/undraw-google-docs-dark.ico" }],
    ["meta", { property: "og:image", content: "/undraw-google-docs.png" }],
  ],

  themeConfig: {
    search: {
      provider: "local",
    },

    externalLinkIcon: true,

    logo: {
      light: "/undraw-google-docs-light.svg",
      dark: "/undraw-google-docs-dark.svg",
    },

    nav: [
      {
        text: "Guide",
        link: "/introduction/what-is-transfers",
      },
      {
        text: "Apps",
        items: [
          { text: "Admin", link: "https://github.com/manuellara" },
          { text: "Submit", link: "https://github.com/manuellara" },
        ],
      },
      {
        text: "Links",
        items: [
          { text: "Pricing", link: "/pricing" },
          { text: "Changelog", link: "https://github.com/manuellara" },
          { text: "Certifications", link: "https://github.com/manuellara" },
          // { text: "Submit a ticket", link: "https://github.com/manuellara" },
        ],
      },
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
            text: "How It Works",
            link: "/introduction/how-it-works",
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
        text: "Submitters",
        items: [
          {
            text: "Getting Started",
            link: "/submitters/getting-started",
          },
        ],
      },

      {
        text: "Team",
        link: "/team",
      },

      {
        text: "Pricing",
        link: "/pricing",
      },
    ],

    socialLinks: [
      {
        icon: 'slack',
        link: "https://github.com/manuellara",
      }
    ],

    footer: {
      message: "K12 SaaS",
      copyright: "Copyright © 2023-present",
    },

    lastUpdated: true,

    editLink: {
      pattern:
        "https://github.com/manuellara/transfers-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
