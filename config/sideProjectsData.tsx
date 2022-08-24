import { SideProjectProps } from './interfaces';

export const SIDE_PROJECTS_DATA: SideProjectProps[] = [
  {
    id: 1,
    title: 'CrowdCoin',
    description:
      'A decentralized voting app that lets people vote on transactions created by fundraisers which eventually helps to avoid scams by the fundraisers was built on the ethereum blockchain and ui was built with NextJS and Semantic-UI',
    repoLink: 'https://github.com/rtpa25/KickStarter',
    techStack: [
      { name: 'NextJS', id: 1 },
      { name: 'Ethereum', id: 2 },
      { name: 'Javascript', id: 3 },
    ],
  },
  {
    id: 2,
    title: 'Sorting Visualizer',
    description:
      'A simple react app where you can visualize various sorting algorithms related to arrays with the help of animations, you can generate random arrays of various sizes and can choose the algorithm to be visualized.',
    repoLink: 'https://github.com/rtpa25/sorting-visualizer',
    techStack: [
      { name: 'React', id: 1 },
      { name: 'React Hooks', id: 2 },
      { name: 'Typescript', id: 3 },
    ],
  },
  {
    id: 3,
    title: 'Li-redit',
    description:
      'A small voting app on opinions of my friends at my university. Built with NextJS  and GraphQL styled with ChakraUI, the backend uses postgres and prisma with supertokens as auth provider',
    repoLink: 'https://github.com/rtpa25/le-redit-web',
    techStack: [
      { name: 'NextJS', id: 1 },
      { name: 'Appollo', id: 2 },
      { name: 'Typescript', id: 3 },
      { name: 'Postgres', id: 4 },
      { name: 'Prisma', id: 5 },
      { name: 'GraphQL', id: 6 },
    ],
  },
  {
    id: 4,
    title: 'Ether',
    description:
      'Ether is the startup that I tried to build in my freshman year of college, it is a platform that connects you with a like-minded college student based on your interests and preferences which basically automates your networking, we later pivoted to providing short educational content from all around the internet in an instagram reels like UI, worked on that product for some time and further decided to drop it.',
    repoLink: 'https://github.com/sinhadityaforever/Ether_Frontend',
    techStack: [
      { name: 'Flutter', id: 1 },
      { name: 'Node', id: 2 },
      { name: 'Express', id: 3 },
      { name: 'Postgres', id: 4 },
      { name: 'SocketIO', id: 5 },
      { name: 'FirebaseAUTH', id: 6 },
    ],
  },
  {
    id: 5,
    title: 'Ecomm Admin Dashboard',
    description:
      'An admin dashboard for the e-commerce apps that I built with this app I save a lot of time while adding products to the app and editing them as well as deleting them. It is built with React and ReactCharts hosted on vercel and styled with tailwind and styled components',
    repoLink: 'https://portfolio-1-admin-dashboard.vercel.app/',
    techStack: [
      { name: 'React', id: 1 },
      { name: 'Tailwind', id: 2 },
      { name: 'Redux-Toolkit', id: 3 },
      { name: 'MongoDB', id: 4 },
      { name: 'Express', id: 5 },
    ],
  },
];
