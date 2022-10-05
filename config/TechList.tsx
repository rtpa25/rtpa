import { TechList } from './interfaces';
import reactIcon from '../public/react.svg';
import nextIcon from '../public/next.svg';
import tailwindIcon from '../public/tailwind.svg';
import reduxIcon from '../public/redux.svg';
import expressIcon from '../public/express.svg';
import postgreIcon from '../public/postgre.svg';
import mongoIcon from '../public/mongo.svg';
import typescriptIcon from '../public/typescript.svg';
import socketioIcon from '../public/socket-io.svg';
import jsIcon from '../public/logo-javascript.svg';
import chakraIcon from '../public/chakra.svg';
import golangIcon from '../public/golang-1.svg';
import dockerIcon from '../public/docker.svg';
import digitalOceanIcon from '../public/digitalocean-2.svg';
import nestjsIcon from '../public/nestjs.svg';
import graphqlIcon from '../public/graphql.svg';
import apolloIcon from '../public/apollo.svg';

export const FrontendTech: TechList[] = [
  {
    id: 1,
    techName: 'ReactJS',
    icon: reactIcon,
    proficiency: 'awesome',
  },
  {
    id: 2,
    techName: 'NextJS',
    icon: nextIcon,
    proficiency: 'good',
  },
  {
    id: 3,
    techName: 'Apollo Client',
    icon: apolloIcon,
    proficiency: 'good',
  },
  {
    id: 4,
    techName: 'Redux-Toolkit',
    icon: reduxIcon,
    proficiency: 'good',
  },
  {
    id: 5,
    techName: 'Typescript',
    icon: typescriptIcon,
    proficiency: 'awesome',
  },
  {
    id: 6,
    techName: 'ChakraUI',
    icon: chakraIcon,
    proficiency: 'awesome',
  },
  {
    id: 7,
    techName: 'Javascript',
    icon: jsIcon,
    proficiency: 'awesome',
  },
  {
    id: 8,
    techName: 'TailwindCSS',
    icon: tailwindIcon,
    proficiency: 'awesome',
  },
  {
    id: 9,
    techName: 'Socket.io',
    icon: socketioIcon,
    proficiency: 'learning',
  },
];

export const BackendTech: TechList[] = [
  {
    id: 1,
    techName: 'Express',
    icon: expressIcon,
    proficiency: 'awesome',
  },
  {
    id: 2,
    techName: 'GraphQL',
    icon: graphqlIcon,
    proficiency: 'good',
  },
  {
    id: 3,
    techName: 'NestJS',
    icon: nestjsIcon,
    proficiency: 'awesome',
  },
  {
    id: 4,
    techName: 'MongoDB',
    icon: mongoIcon,
    proficiency: 'awesome',
  },
  {
    id: 5,
    techName: 'Typescript',
    icon: typescriptIcon,
    proficiency: 'awesome',
  },
  {
    id: 6,
    techName: 'PostgreSQL',
    icon: postgreIcon,
    proficiency: 'awesome',
  },
  {
    id: 7,
    techName: 'Golang',
    icon: golangIcon,
    proficiency: 'awesome',
  },
  {
    id: 8,
    techName: 'Docker',
    icon: dockerIcon,
    proficiency: 'good',
  },
  {
    id: 9,
    techName: 'Digital Ocean',
    icon: digitalOceanIcon,
    proficiency: 'learning',
  },
];
