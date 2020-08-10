require("dotenv").config()

const { g3nnofcfjxwz, DCtGq2CDuGdcFXp7E7KGxVYkY7NaPUwv4kSEWMHNsnw } = process.env

if (!g3nnofcfjxwz || !DCtGq2CDuGdcFXp7E7KGxVYkY7NaPUwv4kSEWMHNsnw) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "Home", to: "/" },
      { name: "About", to: "/about" },
    ],
    links: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      pinterest: "https://pinterest.com/",
      twitter: "https://twitter.com/",
    },
    locale: "en",
    title: `Colby Kraus`,
    description: `Portfolio of Colby Kraus`,
    author: `@colbykraus`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: g3nnofcfjxwz,
        accessToken: DCtGq2CDuGdcFXp7E7KGxVYkY7NaPUwv4kSEWMHNsnw,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Colby Kraus`,
        short_name: `colbykraus`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3182ce`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
