const path = require("path")

const ProjectPageTemplate = path.resolve(`./src/templates/ProjectPage.tsx`)

interface MdxNode {
  id: string
  frontmatter: {
    slug: string
    date: string
    type: string[]
    state: string
    url_override?: string
  }
  internal: {
    contentFilePath: string
  }
}

interface QueryResult {
  allMdx: {
    nodes: MdxNode[]
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql<QueryResult>(`
    query CreatePagesQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            date
            type
            state
            url_override
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data?.allMdx.nodes

  posts?.forEach(node => {
    if (!node.frontmatter.url_override) {
      createPage({
        path: node.frontmatter.slug,
        component: `${ProjectPageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      })
    }
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      title: String!
      slug: String!
      description: String
      date: Date @dateformat(formatString: "YYYY-MM-DD")
      featured_image: String
      type: [String]
      state: String
      url_override: String
      sort_id: Int
    }
  `
  createTypes(typeDefs)
}