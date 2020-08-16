/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
  title: 'Trotto go links',
  baseUrl: '/', // Base URL for your project */
  // Used for publishing and more
  projectName: 'trotto-docs-and-blog',
  organizationName: 'trotto',
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'deploy/deploy-to-heroku', label: 'Deploy' },
    { blog: true, label: 'Blog' },
    { href: 'https://github.com/trotto', label: 'GitHub' }
  ],

  editUrl: 'https://github.com/trotto/docs/tree/master/docs/',

  /* path to images for header/footer */
  headerIcon: 'img/snout2.png',
  favicon: 'img/snout2.png',

  gaTrackingId: 'UA-109850163-1',

  /* Colors for website */
  colors: {
    primaryColor: '#6d267e',
    secondaryColor: '#4c1a58',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Itso, Inc.`,

  twitterUsername: 'TrottoHQ',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/snout2.png',
  twitterImage: 'img/snout2.png',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/trotto/go-links',
};

module.exports = siteConfig;
