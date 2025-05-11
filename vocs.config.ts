import { defineConfig } from "vocs";

export default defineConfig({
  aiCta: false,
  title: "Hyperscan",
  iconUrl: {
    light: "icon-light.svg",
    dark: "icon-dark.svg",
  },
  logoUrl: {
    light: "logo-dark.svg",
    dark: "logo-light.svg",
  },
  description: "Hyperscan developer hub.",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Developer",
      collapsed: false,
      items: [
        {
          text: "Code conventions",
          items: [
            {
              text: "Typescript",
              link: "/workflow/code-conventions/typescript",
            },
            { text: "Python", link: "/workflow/code-conventions/python" },
            { text: "Golang", link: "/workflow/code-conventions/golang" },
            { text: "Dart", link: "/workflow/code-conventions/dart" },
          ],
        },
        {
          text: "Code Review",
          link: "/workflow/code-review",
        },
        {
          text: "Version Control",
          link: "/workflow/version-control",
        },
      ],
    },
    {
      text: "API & SDK",
      items: [
        {
          text: "API Overview",
          link: "/api-sdk/overview",
        },
        {
          text: "Container Tracking",
          link: "/api-sdk/container-tracking",
        },
        {
          text: "Cargo Weight Estimation",
          link: "/api-sdk/cargo-weight-estimation",
        },
        {
          text: "Chemical Screening",
          link: "/api-sdk/chemical-screening",
        },
        {
          text: "Route Optimization",
          link: "/api-sdk/route-optimization",
        },
        {
          text: "Delivery Time Estimation",
          link: "/api-sdk/delivery-time-estimation",
        },
      ],
    },
    {
      text: "Troubleshooting",
      items: [
        {
          text: "Common Issues",
          link: "/business/troubleshooting/common-issues",
        },
        {
          text: "Contact Support",
          link: "/business/troubleshooting/contact-support",
        },
      ],
    },
    {
      text: "Partnerships",
      items: [
        {
          text: "How to Partner",
          link: "/business/partnerships/how-to-partner",
        },
        {
          text: "Partner Benefits",
          link: "/business/partnerships/benefits",
        },
      ],
    },
  ],
});
