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
                { text: 'About ParaSpell✨', link: '/' },
                { text: 'Getting Started', link: '/getting-started' }
            ]
          },
          {
            text: 'Pallets in XCM-SDK',
            items: [
              { text: 'Asset Pallet', link: '/sdk/AssetPallet' },
              { text: 'HRMP Pallet', link: '/sdk/HRMP' },
              { text: 'Node Pallets', link: '/sdk/NodePallets' },
              { text: 'XCM Pallet', link: '/sdk/xcmPallet' },
              { text: 'XYK Pallet', link: '/sdk/XYK' }
            ]
          },
          {
            text: 'Usage of UI-V1 (Archived)',
            items: [
              { text: 'Starting local network', link: '/ui/local' },
              { text: 'Modifying local network', link: '/ui/modify' },
              { text: 'Adding new currency to UI', link: '/ui/currency' },
              { text: 'Executing XCM calls', link: '/ui/transfer' },
              { text: 'Using HRMP channels', link: '/ui/channels' }
            ]
          },
          {
            text: 'Usage of UI-V2',
            items: [
              { text: 'Starting local network', link: '/ui2/local2' },
              { text: 'Adding new currency to UI', link: '/ui2/currency2' },
              { text: 'Executing XCM calls', link: '/ui2/transfer2' },
              { text: 'Using HRMP channels', link: '/ui2/channels2' }
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


