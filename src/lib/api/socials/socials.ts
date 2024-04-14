import type { ButtonColorVariant } from '$lib/components/colors';

import Facebook from '$lib/components/graphics/social/Facebook.svelte';
import Github from '$lib/components/graphics/social/Github.svelte';
import Instagram from '$lib/components/graphics/social/Instagram.svelte';
import LinkedIn from '$lib/components/graphics/social/Linkedin.svelte';
import Medium from '$lib/components/graphics/social/Medium.svelte';
import Showwcase from '$lib/components/graphics/social/Showwcase.svelte';
import Telegram from '$lib/components/graphics/social/Telegram.svelte';

export const githubLink = 'https://github.com/nandini2510/';
export const linkedInLink = 'https://www.linkedin.com/in/nandini2510/';
export const emailLink = 'mailto:ynandini0625@gmail.com';

export const socials = [
  {
    social: 'Github',
    name: '@nandini2510',
    link: githubLink,
    colorVariant: { key: 'github' } as ButtonColorVariant,
    icon: Github
  },
  {
    social: 'LinkedIn',
    name: 'Nandani Yadav',
    link: linkedInLink,
    colorVariant: { key: 'linkedIn' } as ButtonColorVariant,
    icon: LinkedIn
  },

  {
    social: 'Medium',
    name: 'Nandani Yadav',
    link: 'https://medium.com/@nandani2510',
    colorVariant: { key: 'medium' } as ButtonColorVariant,
    icon: Medium
  }
];
