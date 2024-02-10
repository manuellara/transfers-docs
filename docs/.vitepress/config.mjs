import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Transfers",
  description: "Transfers docs",
  head: [
    ['link', { rel: 'icon', href: '/undraw-google-docs-dark.ico' }],
    ['meta', { property: 'og:image', content: '/undraw-google-docs.png' }]
  ],

  themeConfig: {

    search: {
      provider: 'local'
    },

    externalLinkIcon: true,

    logo: {
      light: "/undraw-google-docs-light.svg",
      dark: "/undraw-google-docs-dark.svg",
    },

    nav: [
      { 
        text: "Apps", 
        items: [
          { text: "Admin", link: "https://github.com/manuellara" },
          { text: "Dashboard", link: "https://github.com/manuellara" },
          { text: "Submit Application", link: "https://github.com/manuellara" },
        ]
      },
      { 
        text: "Links", 
        items: [
          { text: "Pricing", link: "/pricing" },
          { text: "Feedback", link: "https://github.com/manuellara" },
          { text: "Changelog", link: "https://github.com/manuellara" },
          { text: "Certifications", link: "https://github.com/manuellara" },
          // { text: "Submit a ticket", link: "https://github.com/manuellara" },
          // { text: "Knowledge Base", link: "https://github.com/manuellara" },
        ]
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
          {
            text: "Features",
            link: "/introduction/features",
          },
          {
            text: "Districts",
            link: "/introduction/districts",
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
            link: "/product/dashboard",
          },
          {
            text: "Demo",
            link: "/product/demo",
          },
        ],
      },

      {
        text: "Team",
        link: "/team",
      }
    ],

    socialLinks: [
      { icon: "slack", link: "https://github.com/manuellara" },
    ],

    footer: {
      message: 'By Manuel Lara',
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
