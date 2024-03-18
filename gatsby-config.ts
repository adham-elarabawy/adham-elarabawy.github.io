import type { GatsbyConfig } from "gatsby";

const siteMetadata = {
  title: 'Adham Elarabawy',
  description: 'Machine Learning Researcher. Currently @ Harvey AI, previously Scale AI, Google, UC Berkeley, BAIR.',
};

const config: GatsbyConfig = {
  siteMetadata: siteMetadata,
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adham Elarabawy`,
        short_name: `AE`,
        start_url: `/`,
        // background_color: `#ffffff`,
        // theme_color: `#007acc`, // Customize with your theme color
        display: `minimal-ui`,
        icon: `static/favicon.png`, 
      },
    },
  ],
};

export default config;

