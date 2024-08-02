// pages/index.tsx yoki pages/home.tsx
import { About, Directions, Footer, Help, Navbar, Species } from '@/components';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Darmon Travel</title>
      </Head>
      <Navbar />
      <Help />
      <Species />
      <About/>
      <Directions/>
      <Footer/>
    </div>
  );
};

export default Home;
