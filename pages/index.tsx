import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Hero,
  Navbar,
  Projects,
  TechStack,
  Contact,
  Footer,
  Socials,
  WorkExperience,
  OtherProjects,
} from '../components/z(exporter)';
import { Fade } from 'react-awesome-reveal';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ronit Panda 😎</title>
        <meta
          name='Ronit'
          content={`
          Ronit's personal portfolio
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
