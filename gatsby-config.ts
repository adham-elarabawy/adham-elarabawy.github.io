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
  ],
};

export default config;

