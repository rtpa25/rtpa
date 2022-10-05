import type { NextPage } from 'next';
import Head from 'next/head';
import { Fade } from 'react-awesome-reveal';
import {
  Contact,
  Footer,
  Hero,
  Navbar,
  OtherProjects,
  Projects,
  Socials,
  TechStack,
  WorkExperience,
} from '../components/z(exporter)';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ronit Panda 😎</title>
        <meta
          name='Ronit'
          content={`
          I’m a software developer specializing in building full stack web apps. Currently, I’m looking for an internship at a seed or series-A stage startup as a Full-Stack developer intern, to be around people like whom I want to be and contribute to teams that are trying to bring a DIFFERENCE 🚀.
        `}
        />
      </Head>
      <Navbar />
      <Fade cascade={true} duration={300}>
        <Hero />
        <WorkExperience />
        <Projects />
        <OtherProjects />
        <TechStack />
        <Contact />
      </Fade>
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
