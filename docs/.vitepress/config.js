const ourStorySidebar = [{ text: 'Our Story', link: '/about/our-story' }]

export default {
    title: 'ParaSpell',
    description: 'Just playing around.',
    themeConfig: {
        logo: '/img/logo-vue.svg',

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
                { text: 'Our Story', link: '/about/our-story' }
            ]
          },
          {
            text: 'Guide',
            items: [
                { text: 'Our Story', link: '/about/our-story' }
            ]
          },
        ]
    }
  }


