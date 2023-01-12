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
                { text: 'About SDK', link: '/' },
                { text: 'Getting Started', link: '/getting-started' }
            ]
          },
          {
            text: 'Pallets in SDK',
            items: [
              { text: 'Asset Pallet', link: '/pallets/AssetPallet' },
              { text: 'HRMP Pallet', link: '/pallets/HRMP' },
              { text: 'XCM Pallet', link: '/pallets/xcmPallet' },
              { text: 'XYK Pallet', link: '/pallets/XYK' }
            ]
          },
          {
            text: 'Interesting links',
            items: [
              { text: 'Links', link: '/links' },
            ]
          },
        ]
    }
  }


