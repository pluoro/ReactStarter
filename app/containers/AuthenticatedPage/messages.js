import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.AuthenticatedPage';

export default defineMessages({
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Dashboard',
  },
  reviews: {
    id: `${scope}.reviews`,
    defaultMessage: 'Reviews',
  },
  products: {
    id: `${scope}.products`,
    defaultMessage: 'Products',
  },
  myTests: {
    id: `${scope}.myTests`,
    defaultMessage: 'My Tests',
  },
  payments: {
    id: `${scope}.payments`,
    defaultMessage: 'Payments',
  },
  settings: {
    id: `${scope}.settings`,
    defaultMessage: 'Settings',
  },
  help: {
    id: `${scope}.help`,
    defaultMessage: 'Help',
  },
  signOut: {
    id: `${scope}.signOut`,
    defaultMessage: 'Sign Out',
  },
});
