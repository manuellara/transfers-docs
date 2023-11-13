import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Transfers",
  description: "Transfers documentation site",
  head: [
    [
      'link', 
      { rel: 'icon', href: '/undraw-google-docs-dark.ico' }
    ]
  ],

  themeConfig: {

    externalLinkIcon: true,

    logo: {
      light: "/undraw-google-docs-light.svg",
      dark: "/undraw-google-docs-dark.svg",
    },

    nav: [
      { text: "Admin", link: "https://github.com/manuellara" },
      { text: "Applications", link: "https://github.com/manuellara" },
      { text: "Dashboard", link: "https://github.com/manuellara" },
      { text: "Links", 
        items: [
          { text: "Pricing", link: "https://github.com/manuellara" },
          { text: "Feedback", link: "https://github.com/manuellara" },
          { text: "Certifications", link: "https://github.com/manuellara" },
          { text: "Submit a ticket", link: "https://github.com/manuellara" },
          { text: "Knowledge Base", link: "https://github.com/manuellara" },
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
            link: "/product/dashboard",
          },
          {
            text: "API",
            link: "/product/api",
          },
          {
            text: "Demo",
            link: "/product/demo",
          }
        ],
      },

      {
        text: "Team",
        link: "/team",
      }
    ],

    socialLinks: [
      { icon: {
          svg: `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.010 12.797c2.005-0.026 3.938 0.75 5.365 2.161 1.427 1.406 2.234 3.328 2.234 5.333s-0.807 3.927-2.234 5.339c-1.427 1.406-3.359 2.188-5.365 2.161-4.099-0.057-7.396-3.396-7.396-7.5 0-4.099 3.297-7.443 7.396-7.495zM0.203 11.625l4.031 4.76c0.307 0.37 0.854 0.411 1.214 0.094 6.516-5.839 14.63-5.839 21.12 0 0.365 0.318 0.911 0.276 1.224-0.094l4.005-4.76c0.307-0.365 0.26-0.901-0.099-1.208-9.464-8.276-21.948-8.276-31.406 0-0.354 0.313-0.391 0.849-0.089 1.208z"/>
                </svg>`
        }, 
        link: "https://github.com/manuellara" 
      },
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
