import type { GatsbyConfig } from "gatsby";

const siteMetadata = {
  title: 'Adham Elarabawy',
  description: 'ML Research Engineer at Google DeepMind. Previously at Physical Intelligence, Harvey AI, Scale AI, Google, UC Berkeley, BAIR.',
  siteUrl: 'https://elarabawy.com',
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
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
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

