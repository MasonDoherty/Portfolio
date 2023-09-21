import assignrefImage from '../assets/assignref.jpg';
import smartmockupsImage from '../assets/smartmockups_lk0hpnr6.jpg';
import h2tmockupImage from '../assets/h2tmockup.jpg';
import coffeemockupImage from '../assets/coffeemockup.jpg';
import localsOnlyImage from '../assets/smartmockups_lmtpiptm.jpg';
const data = [
  {
    id: '1',
    title: 'AssignRef',
    description:
      'Assign Ref is a comprehensive platform designed exclusively for game officials of the Liga de Fútbol Americano Profesional (LFA). It facilitates the process of game assignment, performance evaluation, knowledge assessment, and fair compensation for their invaluable contributions.',
    image: {
      src: assignrefImage,
      placeholderSrc: assignrefImage,
    },
    links: {
      site: 'https://assignref.azurewebsites.net/',
    },
    technologies: [
      '#react',
      '#bootstrap',
      '#yarn',
      '#google-map-api',
      '#.NET',
      '#SQL',
    ],
  },
  {
    id: '2',
    title: 'Lift | TrackYourLift.com',
    description:
      'Lift is a powerful workout tracking app that enables users to effortlessly record and review their fitness activities. With features like adding sets, exercises, and reps, it helps you keep track of your progress. Share your workout accomplishments on social media and inspire others on their fitness journey.',
    image: {
      src: smartmockupsImage,
      placeholderSrc: smartmockupsImage,
    },

    technologies: [
      '#react-native',
      '#react-native-web',
      '#expo',
      '#react-navigation',
      '#.NET',
      '#SQL',
    ],
  },
  {
    id: '3',
    title: 'Here 2 There | H2T.io',
    description:
      '“Here 2 There” is an advanced racing web application that empowers users to craft custom tracks throughout the city. With personalized options for track accessibility, vehicle preferences, and scheduling, users can tailor their racing experience to perfection. The app features a dynamic leaderboard where racers can showcase their fastest completion times. For Verified Members, access to verified times offers the chance to compete for top honors and exciting prizes. Fueling the community spirit, the app also organizes local meetups, connecting racing enthusiasts to exchange ideas and indulge in engaging conversations about all things racing and cars.',
    image: {
      src: h2tmockupImage,
      placeholderSrc: h2tmockupImage,
    },

    technologies: [
      '#react',
      '#google-map-api',
      '#expo',
      '#cryptography',
      '#react-navigation',
      '#.NET',
      '#SQL',
    ],
  },
  {
    id: '4',
    title: 'Locals Only',
    description:
      'Locals Only is the ultimate app designed exclusively for local businesses. Empower your communitys entrepreneurs by providing them with personalized, branded apps that showcase their services, business information, and promotions. With Locals Only, businesses can effortlessly connect with local customers, boost their online presence, and thrive in todays digital landscape. Elevate local commerce, one business at a time, with Locals Only.',
    image: {
      src: localsOnlyImage,
      placeholderSrc: localsOnlyImage,
    },
    links: {
      site: 'https://github.com/MasonDoherty/OnlyLocals',
    },
    technologies: ['#React Native', '#css'],
  },
];

export default data;
