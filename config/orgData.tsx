import { OrgData } from './interfaces';

export const ORG_DATA: OrgData[] = [
  {
    id: 1,
    name: 'SuperTokens',
    position: 'Software Engineer Intern',
    startDate: 'Jan 2022',
    endDate: 'June 2022',
    website: 'https://supertokens.com',
    work: [
      {
        id: 1,
        title:
          'Extensively worked on the golang SDK of SuperTokens. This is one of the many backend SDKs used by SuperTokens to interact with the core which does all the heavy lifting of session management.',
      },
      {
        id: 2,
        title:
          'Build various dummy implementations of the SuperTokens SDK in golang with go-fiber, grpc. And also built an implementation with svelte using the SuperTokens-React-SDK.',
      },
      {
        id: 3,
        title:
          'Wrote extensive unit tests for the entire golang SDK and contributed to CI/CD pipelines for the SDK.',
      },
      {
        id: 4,
        title:
          'Collaborated with other fellow engineers in pair programming sessions and also participated in brainstorming sessions with the management team discussing customer acquisition and growth opportunities.',
      },
    ],
  },

  {
    id: 2,
    name: 'Ether',
    position: 'Founder and Software Developer',
    startDate: 'Jan 2021',
    endDate: 'Sep 2021',
    website: 'https://supertokens.com',
    work: [
      {
        id: 0,
        title:
          'Ether is the startup that I tried to build in my freshman year of college, it is a platform that connects you with a like-minded college student based on your interests and preferences which basically automates your networking. Worked on that product for some time and further decided to drop it.',
      },
      {
        id: 1,
        title:
          'Extensively worked on the Mobile App built with Flutter and the backend server built with NodeJS including a Robust REST API and a chat server built with web-socket.',
      },
      {
        id: 2,
        title:
          'Shipped the entire chat and matching UI for the mobile App including ice-breakers and many other gamification features.',
      },
      {
        id: 3,
        title:
          'Implemented a blocking feature both on the front and backend where if a user is blocked 3x or reported 2x is removed from the app with all his data and can no longer use the app with the same credentials',
      },
      {
        id: 4,
        title:
          'During the period we were also able to acquire 1500 users throughout our university via various organic marketing channels.',
      },
    ],
  },
];
