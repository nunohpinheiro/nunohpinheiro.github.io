// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nuno Pinheiro",
  tagline: 'Welcome to my public private space',
  favicon: 'img/nuno-oh.png',

  // Set the production url of your site here
  url: 'https://nunohpinheiro.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nunohpinheiro', // Usually your GitHub org/user name.
  projectName: 'nunohpinheiro.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        indexPages: true,
        docsRouteBasePath: "/my-blog"
      }),
    ],
  ],

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
          routeBasePath: 'my-blog'  //This should be the word that you want to set
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
      docs: {
        sidebar: {
          hideable: true,
        },
      },
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
            href: "https://linkedin.com/in/nunohpinheiro",
            position: "right",
            className: "header-linkedin-link",
            "aria-label": "LinkedIn",
          },
          {
            href: "https://github.com/nunohpinheiro",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub",
          },
          {
            href: 'https://stackoverflow.com/users/5220455/nunohpinheiro',
            position: "right",
            className: "header-stackoverflow-link",
            "aria-label": "Stack Overflow",
          },
          {
            href: 'https://nuget.org/profiles/nunohpinheiro',
            position: "right",
            className: "header-nuget-link",
            "aria-label": "NuGet Gallery",
          },
          {
            href: 'https://scholar.google.com/citations?user=oUjyq6oAAAAJ',
            position: "right",
            className: "header-googlescholar-link",
            "aria-label": "Google Scholar",
          },
        ],
      },
      footer: {
        style: 'dark',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
