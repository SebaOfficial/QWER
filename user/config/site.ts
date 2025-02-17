import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://qwer.racca.me',
  title: 'QWER',
  subtitle: '🚀 QWER - Built using Svelte with ❤',
  description: '🚀 QWER - Awesome Blog Starter, Built using Svelte with ❤',
  lang: 'en',
  timeZone: 'Europe/Rome',
  since: 2022,
  cover: SiteCover,
  author: {
    name: 'John Doe',
    status: '🚀',
    statusTip:
      '<a href="https://github.com/SebaOfficial/QWER" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >QWER</a> is Awesome !',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://github.com/SebaOfficial/QWER',
    github: 'https://github.com/SebaOfficial',
    email: 'sebastiano@racca.me',
    bio: `Peace begins <br/> With a smile`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/SebaOfficial'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment

          // Replace the following with your own setting
          `<!-- Cloudflare Web Analytics -->
            <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "f2f7a8e2ba134dbcb6c0e7a4cdb50572"}'></script>
          <!-- End Cloudflare Web Analytics -->`,
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: 'sebaofficial/qwer',
  repoId: 'R_kgDOLCksuA',
  category: 'Announcements',
  categoryId: 'DIC_kwDOLCksuM4CcWO5',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'See Docs 📄',
    url: 'https://docs-svelte-qwer.vercel.app',
    rel: 'external',
  },
  {
    name: 'Get QWER 🚀',
    url: 'https://github.com/SebaOfficial/QWER',
    rel: 'external',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'See Docs 📄',
      url: 'https://docs-svelte-qwer.vercel.app',
      rel: 'external',
    },
    {
      name: 'Get QWER 🚀',
      url: 'https://github.com/SebaOfficial/QWER',
      rel: 'external',
    },
  ],
};
