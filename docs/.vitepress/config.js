export default {
    title: 'ParaSpell',
    description: 'Make world more connected with XCM.',
    head: [
    ['link', { rel: "icon", sizes: "180x180", href: "./docs/img/favicon.png"}],
  ],
    themeConfig: {
        logo: '/docs/img/paraspell.png',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/paraspell' },
            { icon: 'twitter', link: 'https://twitter.com/paraspell' },
        ],

        nav: [
            { text: 'Home', link: '/docs/'},
        ],
        sidebar: [
          {
            items: [
                { text: 'About ParaSpell✨', link: '/docs' },
                { text: 'Getting Started', link: './docs/getting-started' }
            ]
          },
          {
            text: 'Pallets in SDK',
            items: [
              { text: 'Asset Pallet', link: './docs/sdk/AssetPallet' },
              { text: 'HRMP Pallet', link: './docs/sdk/HRMP' },
              { text: 'XCM Pallet', link: './docs/sdk/xcmPallet' },
              { text: 'XYK Pallet', link: './docs/sdk/XYK' }
            ]
          },
          {
            text: 'Usage of UI',
            items: [
              { text: 'Starting local network', link: './docs/ui/local' },
              { text: 'Modifying local network', link: './docs/ui/modify' },
              { text: 'Adding new currency to UI', link: './docs/ui/currency' }
            ]
          },
          {
            text: 'Interesting links',
            items: [
              { text: 'Links', link: './docs/links' },
            ]
          },
        ]
    }
  }


