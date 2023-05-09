// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Konzeption betrieblicher Anwendungssysteme',
  favicon: 'img/favicon.ico',

  url: 'https://doesnotexist.com',
  baseUrl: '/',

  organizationName: 'fherfurt',
  projectName: 'kba', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/'
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Konzeption betrieblicher Anwendungssysteme',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Dokumentation',
          },
          {
            href: 'https://github.com/fh-erfurt/ss23-kba-project',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
