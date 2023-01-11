export default {
    title: 'ParaSpell',
    description: 'Just playing around.',
    themeConfig: {
        logo: '/img/paraspell.png',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/paraspell' },
            { icon: 'twitter', link: 'https://twitter.com/paraspell' },
        ],

        nav: [
            { text: 'Home', link: '/'},
        ],
        sidebar: [
          {
            items: [
                { text: 'Introduction', link: '/' },
                { text: 'Getting Started', link: '/getting-started' }
            ]
          },
          {
            text: 'Pallets',
            items: [
              { text: 'XCM Pallet', link: '/pallets/xcmPallet' },
              { text: 'HRMP Pallet', link: '/pallets/HRMP' },
              { text: 'XYK Pallet', link: '/pallets/XYK' },
              { text: 'Asset Pallet', link: '/pallets/AssetPallet' }
            ]
          },
        ]
    }
  }


