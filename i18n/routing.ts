import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import {defaultLocale, locales} from '@/messages/config';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  defaultLocale
});

// export const {Link, redirect, usePathname, useRouter, getPathname} =createNavigation(routing);