export default {
    title: 'ParaSpell',
    description: 'Just playing around.',
    themeConfig: {
        logo: '/img/paraspell.png',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vue' },
            { icon: 'twitter', link: 'https://twitter.com/vuejs' },
            { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
        ],

        nav: [
            { text: 'Home', link: '/'},
            { text: 'About', link: '/about/'},
            { text: 'Contact', link: '/contact'}
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
                { text: 'Introduction', link: '/' },
                { text: 'Getting Started', link: '/getting-started' }
            ]
          },
        ]
    }
  }


