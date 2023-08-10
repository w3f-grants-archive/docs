export default {
    title: 'ParaSpell',
    description: 'Make world more connected with XCM.',
    base: '/docs/',
    head: [
      [
        'link',
        { rel: 'icon', type: 'image/x-icon',  href: '/docs/favicon.ico' }
      ]
    ],
    themeConfig: {
        logo: '/paraspell.png',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/paraspell' },
            { icon: 'twitter', link: 'https://twitter.com/paraspell' },
        ],

        sidebar: [
          {
            items: [
                { text: 'Welcome to ParaSpell✨', link: '/' },
            ]
          },
          {
            text: 'LightSpell⚡️ XCM API',
            items: [
              { text: 'Getting Started', link: '/api/g-started' },
              { text: 'Asset Pallet', link: '/api/assetP' },
              { text: 'HRMP Pallet', link: '/api/hrmpP' },
              { text: 'Node Pallets', link: '/api/nodeP' },
              { text: 'XCM Pallet', link: '/api/xcmP' },
              { text: 'Upgrade request amount', link: '/api/upgrade' },
              { text: 'API Playground', link: '/api/playground' },
              { text: 'Deploy API yourself', link: '/api/deploy' },


            ]
          },
          {
            text: 'ParaSpell✨ XCM SDK',
            items: [
              { text: 'Getting Started', link: '/sdk/getting-started' },
              { text: 'Asset Pallet', link: '/sdk/AssetPallet' },
              { text: 'HRMP Pallet', link: '/sdk/HRMP' },
              { text: 'Node Pallets', link: '/sdk/NodePallets' },
              { text: 'XCM Pallet', link: '/sdk/xcmPallet' },
              { text: 'XYK Pallet', link: '/sdk/XYK' }
            ]
          },
          {
            text: 'Might interest you 🔭',
            items: [
              { text: 'Interesting links', link: '/links' },
              { text: 'List of supported chains', link: '/supported' },
            ]
          },
        ]
    }
  }


