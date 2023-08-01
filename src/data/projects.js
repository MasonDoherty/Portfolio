import assignrefImage from '../assets/assignref.jpg';
import smartmockupsImage from '../assets/smartmockups_lk0hpnr6.jpg';
import h2tmockupImage from '../assets/h2tmockup.jpg';
import coffeemockupImage from '../assets/coffeemockup.jpg';
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
    title: 'Masons Coffee',
    description:
      'Masons Coffee is an innovative e-commerce platform dedicated to coffee enthusiasts, offering a personalized shopping experience with handpicked coffee blends from around the world. With customizable grind options and exclusive perks for Subscribed Members, we foster a vibrant coffee-loving community to share brewing tips and indulge in all things coffee. Our user-friendly interface prioritizes data security, providing a delightful journey for coffee lovers',
    image: {
      src: coffeemockupImage,
      placeholderSrc: coffeemockupImage,
    },

    technologies: [
      '#react',
      '#css',
      '#square',
      '#NPM',
      '#react-router-dom',
      '#slick-carousel',
    ],
  },
];

export default data;
