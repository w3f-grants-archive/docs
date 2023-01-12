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
                { text: 'About ParaSpell✨', link: '/' },
                { text: 'Getting Started', link: '/getting-started' }
            ]
          },
          {
            text: 'Pallets in SDK',
            items: [
              { text: 'Asset Pallet💰', link: '/sdk/AssetPallet' },
              { text: 'HRMP Pallet⛓️', link: '/sdk/HRMP' },
              { text: 'XCM Pallet📭', link: '/sdk/xcmPallet' },
              { text: 'XYK Pallet📈', link: '/sdk/XYK' }
            ]
          },
          {
            text: 'Usage of UI',
            items: [
              { text: 'Installing🛠️', link: '/ui/installing' },
              { text: 'Starting local network🌍', link: '/ui/local' },
              { text: 'Modifying local network🧰', link: '/ui/modify' },
              { text: 'Adding new currency to UI💵', link: '/ui/currency' }
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


