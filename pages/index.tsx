import { useContext } from 'react';
import { motion, Variants } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

// Context
import { StyleContext } from '../contexts/StyleContext';
import { TimerContext } from '../contexts/TimerContext';

// Components
import TimerToggler from '../components/TimerToggler';
import Timer from '../components/Timer';
import Settings from '../components/Settings';
import Footer from '../components/Footer';

// Assets
import img from '../public/assets/static_image.png';

export default function Home() {
  const { font } = useContext(StyleContext);
  const { pomodoroCount } = useContext(TimerContext);

  const imageVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
  };

  return (
    <div className={`grid min-h-screen w-full grid-rows-[1fr_auto] justify-center bg-primary ${font}`}>
      <Head>
        <title>Pomodoro App</title>
        <meta
          name='description'
          content='Pomodoro App built with Next.JS, TypeScript, Tailwind CSS, and Framer Motion'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-[100vw] h-[100vh] flex flex-col items-center md:flex-row md:justify-between'>
        <div className='md:block w-full md:w-3/5 h-3/5 md:h-full'>
          <motion.div initial='initial' animate='animate' variants={imageVariants} style={{ height: '100%' }}>
            <Image src={img} alt='pomodoro' className='h-full object-cover' />
          </motion.div>
        </div>
        <div className='w-full md:w-2/5 h-2/5 md:h-full flex flex-col items-center justify-center'>
          <TimerToggler />
          <Timer />
          <div className="text-white text-xl flex items-center justify-center">History: {pomodoroCount}</div>
          <Settings />
        </div>
      </main>

      <Footer />
    </div>
  );
}
