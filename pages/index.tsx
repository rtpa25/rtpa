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
