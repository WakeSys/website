module.exports = {
  siteMetadata: {
    name: `WakeSys enterprise software`,
    tagline: `with integrated online booking 
    tailor-made for parks in the water sports industry, 
    wanting to automate, track and simplify their operations.`,
    siteUrl: `https://www.wakesys.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`, {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,500,700`
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.wakesys.com',
        sitemap: 'https://www.wakesys.com/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    }
  ],
}