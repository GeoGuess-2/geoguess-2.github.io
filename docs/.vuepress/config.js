const { description } = require('../../package')

const nav = (prefix) => [
  {
    text: 'Guide',
    link: `${prefix}/guide/`,
  },
  {
    text: 'Demo',
    link: 'https://demo.geoguess.games/'
  }
]


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GeoGuess',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'GeoGuess is an open-source geography game with Google Map StreetView. You can play solo or with your friends simultaneously.',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icons/apple-icon-152x152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', {src:"https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"}]
],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repoLabel: 'Contribute',
    repo: 'https://github.com/GeoGuess/GeoGuess/contribute',
    search: true,
	docsRepo: 'GeoGuess/geoguess.games',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: true,
    nav: nav(''),
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                '/guide/instructions',
                '/guide/update',
                '/guide/twa',
              ]
            },
            {
              title: 'Contribution',
              collapsable: false,
              children: [
                '/guide/dev/maps',
                '/guide/dev/areas'
              ]
            }
          ],
          
        },
      },
      '/fr/': {
        label: 'Français',
        selectText: 'Langue',
        ariaLabel: 'Selectionner une langue',
        editLinkText: 'Editer cette page sur Github',
        lastUpdated: 'Dernière modification',     
        nav: nav('/fr'),
        sidebar: {
          '/fr/guide/': [
            {
              title: 'Guide',
              collapsable: true,
              children: [
                '',
                '/fr/guide/instructions',
              ]
            }
          ],
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'GeoGuess',
      description: 'OpenSource game with Google Map StreetView.'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'GeoGuess',
      description: 'Un jeu Open Source avec Google Map StreetView.'
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['sitemap', {
      hostname: 'https://geoguess.games/'
    }],
    [ 'autometa', {
        site: {
            name   : 'GeoGuess',
        },  
        author: {
            name   : 'Bilel Jegham',
            twitter: '@BilelJegham',
        },
         image_sources: [
             /<!--imageSocial["'](.*?)['"]/i,
             
			/!\[.*?\]\((.*?)\)/i,					// markdown image regex
			/<img.*?src=['"](.*?)['"]/i,
        ]
    } ],
    [
        '@vuepress/google-analytics',
        {
            'ga': 'UA-167347365-1' // UA-00000000-0
        }
    ],
    [
      "vuepress-plugin-google-adsense",
      {
        adClient: "ca-pub-3283982605864712", 
      },
    ],
  ]
}
