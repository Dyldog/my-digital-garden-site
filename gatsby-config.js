module.exports = {
  plugins: [
  {
    resolve: `gatsby-theme-garden`,
    options: {
      contentPath: `${__dirname}/content`,
      rootNote: `/index`,
    },
  }, 
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
      {
        resolve: `gatsby-remark-double-brackets-link`,
        options: {
          titleToURLPath: `${__dirname}/resolve-url.js`
        },
      },
      ],
    }
  },
  {
    resolve: 'gatsby-plugin-tinacms',
    options: {
      sidebar: {
        hidden: false,
        position: "displace",
      },
      plugins: [
      "gatsby-tinacms-git",
      "gatsby-tinacms-remark",
      ],
    }
  }
  ],
  siteMetadata: {
    title: `Site title`,
  },
}
