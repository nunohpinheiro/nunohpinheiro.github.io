// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nuno Pinheiro",
  tagline: 'My public private space',
  favicon: 'img/nuno-oh.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          path: './docs', //This should be the path to your docs folder
          routeBasePath: 'hi-there'  //This should be the word that you want to set
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Nuno Pinheiro',
        logo: {
          alt: 'Nuno Pinheiro Logo',
          src: 'img/nuno-hi.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'hiThereSidebar',
            position: 'left',
            label: 'Hi there!',
          },
          {
            href: 'https://linkedin.com/in/nunohpinheiro',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/nunohpinheiro',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://stackoverflow.com/users/5220455/nunohpinheiro',
            label: 'Stack Overflow',
            position: 'right',
          },
          {
            href: 'https://nuget.org/profiles/nunohpinheiro',
            label: 'NuGet Gallery',
            position: 'right',
          },
          {
            href: 'https://scholar.google.com/citations?user=oUjyq6oAAAAJ',
            label: 'Google Scholar',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© Nuno Pinheiro ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
