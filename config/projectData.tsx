import EcommPhoto from '../public/ecomm.png';
import CodePlayPhoto from '../public/codeplay.png';
import LearnifyPhoto from '../public/learnify.png';
import FriendSpacePhoto from '../public/friendspace.png';
import ZenNotePhoto from '../public/zenNote.png';
import { ProjectProps } from './interfaces';

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    title: 'Learnify',
    description:
      'Learnify is a web app that converts distracting youtube playlist into an interactive udemy like course hence resulting in less distraction and increased productivity. Built with the help of YouTube API and is being loved by my friends at my university, some of the key features that students like is the note taking feature with timestamps, progress indicator and the fact that there are no form of distracting popups or non-educational videos.',
    techStack: [
      {
        id: 1,
        name: 'NextJS',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'TailwindCSS',
      },
      {
        id: 4,
        name: 'Redux-Toolkit',
      },
      {
        id: 5,
        name: 'SuperTokens',
      },
      {
        id: 6,
        name: 'YouTube API',
      },
      {
        id: 7,
        name: 'Express',
      },
      {
        id: 8,
        name: 'Mongoose',
      },
      {
        id: 9,
        name: 'Docker',
      },
      {
        id: 10,
        name: 'Vercel',
      },
      {
        id: 11,
        name: 'Railway',
      },
    ],
    externalLink: 'https://learnify.site',
    photo: LearnifyPhoto,
    repoLink: 'https://github.com/rtpa25/learnify-client',
  },
  {
    id: 2,
    title: 'Code-Play',
    description:
      "A NPM package that let's you make coding cheat sheets and notebooks all from your browser. We don't store your data anywhere it's stored locally on your computer. Code bundling and transpiling on the browser makes code-play editors faster than any other editor on the web. CodePlay is a collection of 3 packages a CLI, A local-Client which is a single-page web app and A local-Server which is an express server which serves the client and stores the users code in the users machine",
    techStack: [
      {
        id: 1,
        name: 'ReactJS',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'BulmaCSS',
      },
      {
        id: 4,
        name: 'Redux-Toolkit',
      },
      {
        id: 5,
        name: 'Lerna',
      },
      {
        id: 6,
        name: 'Commander',
      },
      {
        id: 7,
        name: 'Express',
      },
      {
        id: 8,
        name: 'EsBuild',
      },
      {
        id: 9,
        name: 'Monaco Editor',
      },
      {
        id: 10,
        name: 'NPM',
      },
    ],
    externalLink: 'https://www.npmjs.com/package/code-play-rp',
    photo: CodePlayPhoto,
    repoLink: 'https://github.com/rtpa25/code-play',
  },
  {
    id: 3,
    title: 'FriendSpace',
    description:
      'A chat and call app for friends, chat with your friends, call them or make group calls, Sounds simple right though it had challenges when it came to the design and the features that were added. The chat service is custom build with socket.io, The entire auth service is custom built with JWT tokens stored in cookies, you can add friends send invitations and either accept or reject them you can create groups and all the users will be added to groups this is just used by people in my close circle to have fun',
    techStack: [
      {
        id: 1,
        name: 'NextJS',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'TailwindCSS',
      },
      {
        id: 4,
        name: 'Redux-Toolkit',
      },
      {
        id: 5,
        name: 'Socket.io',
      },
      {
        id: 6,
        name: 'Express',
      },
      {
        id: 7,
        name: 'Mongoose',
      },
      {
        id: 8,
        name: 'MongoDB',
      },
      {
        id: 9,
        name: 'Docker',
      },
      {
        id: 10,
        name: 'Vercel',
      },
      {
        id: 11,
        name: 'Digital Ocean',
      },
    ],
    externalLink: 'https://www.friendspace.site',
    photo: FriendSpacePhoto,
    repoLink: 'https://github.com/rtpa25/friend-space',
  },
  {
    id: 4,
    title: 'ZenNote',
    description:
      "Being a huge fan of the note taking app RemNote, I decided to create a mini zen version within a couple of days just for myself, I used tip tap as the core editor and built on top of it with a note taking feature and a todo list feature, Bullet points being the central theme and to top all this the editor is smarter than you think just hit <3 and see the magic it automatically infers the emoji and renders it on the screen I am still working on this project adding new features and improving the existing ones, It's just a fun little project which I want to limit for myself to take notes and keep the control over my own data",
    techStack: [
      {
        id: 1,
        name: 'NextJS',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'TailwindCSS',
      },
      {
        id: 4,
        name: 'Redux-Toolkit',
      },
      {
        id: 5,
        name: 'Tip-Tap-editor',
      },
      {
        id: 6,
        name: 'Express',
      },
      {
        id: 7,
        name: 'Mongoose',
      },
      {
        id: 8,
        name: 'MongoDB',
      },
      {
        id: 9,
        name: 'Docker',
      },
      {
        id: 10,
        name: 'Vercel',
      },
      {
        id: 11,
        name: 'Railway',
      },
    ],
    externalLink: 'https://www.remnote.site',
    photo: ZenNotePhoto,
    repoLink: 'https://github.com/rtpa25/remnote-client',
  },
  {
    id: 5,
    title: 'Nyka',
    description:
      "You are not a true self learned developer if you haven't ever built an e-commerce app this was my attempt with a different tech stack this time it has a minimal and beautiful UI and has all basic features you can think of in an e-commerce app from filtering products to adding them to cart and then checking out all packed up with a full blown auth service thanks to SuperTokens",
    techStack: [
      {
        id: 1,
        name: 'NextJS',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'TailwindCSS',
      },
      {
        id: 4,
        name: 'Redux-Toolkit',
      },
      {
        id: 5,
        name: 'Golang',
      },
      {
        id: 6,
        name: 'Gin-Gonic',
      },
      {
        id: 7,
        name: 'Postgres',
      },
      {
        id: 8,
        name: 'SQLC',
      },
      {
        id: 9,
        name: 'Docker',
      },
      {
        id: 10,
        name: 'Vercel',
      },
      {
        id: 11,
        name: 'Digital Ocean',
      },
    ],
    externalLink: 'https://www.nyka.site',
    photo: EcommPhoto,
    repoLink: 'https://github.com/rtpa25/ecomm-web',
  },
];
