const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const ProjectPageTemplate = path.resolve(`./src/templates/ProjectPage.tsx`);
const BlogPostTemplate = path.resolve(`./src/templates/BlogPost.tsx`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parentNode = getNode(node.parent);
    const sourceInstanceName = parentNode.sourceInstanceName;

    // Attempt to use the existing slug from frontmatter if available
    const existingSlug = node.frontmatter && node.frontmatter.slug;

    if (!existingSlug) {
      // If there is no existing slug in frontmatter, throw an error
      throw new Error(`Missing 'slug' in the frontmatter of ${sourceInstanceName} file. Node ID: ${node.id}`);
    }

    // Use the existing slug from the frontmatter
    createNodeField({
      node,
      name: `slug`,
      value: existingSlug,
    });
    createNodeField({
      node,
      name: `sourceInstanceName`,
      value: sourceInstanceName,
    });
  }
};


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          fields {
            slug
            sourceInstanceName
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
    return;
  }

  const projects = result.data.allMdx.nodes.filter(node => node.fields.sourceInstanceName === "projects");
  const posts = result.data.allMdx.nodes.filter(node => node.fields.sourceInstanceName === "blog");

  // Create pages for projects and posts separately
  projects.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: `${ProjectPageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // component: ProjectPageTemplate,
      context: { id: node.id },
    });
  });

  posts.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: `${BlogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // component: BlogPostTemplate,
      context: { id: node.id },
    });
  });
};
