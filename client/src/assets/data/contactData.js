import {
  faBuilding,
  faDesktop,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const businessContact = {
  location: {
    streetAddress: 'Put Vučipolja 29',
    city: 'Podstrana',
    postalCode: '21312',
    country: 'Croatia',
    icon: faBuilding,
  },
  phoneNumber: {
    mainPhone: '+385 98 939 2296',
    icon: faPhoneAlt,
  },
  email: {
    mainEmail: 'bolt.travel17@gmail.com',
    icon: faEnvelope,
  },
  website: {
    url: '/',
    linkName: 'Bolt Travel',
    icon: faDesktop,
  },
};

export const socialMediaLinks = [
  {
    name: 'Facebook',
    link: 'https://facebook.com/bolttravel',
    icon: faFacebook,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/BoltTravel',
    icon: faTwitter,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/bolttravel',
    icon: faInstagram,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/company/11376500',
    icon: faLinkedin,
  },
];
