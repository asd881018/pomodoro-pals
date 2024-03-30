import { useContext } from "react";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

// Context
import { StyleContext } from "../contexts/StyleContext";
import { TimerContext } from "../contexts/TimerContext";

// Components
import TimerToggler from "../components/TimerToggler";
import Timer from "../components/Timer";
import Settings from "../components/Settings";
import Footer from "../components/Footer";

// Assets
import img from "../public/assets/static_image.png";

import { Amplify } from "aws-amplify";
import { Button, useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react'
import awsconfig from "../src/aws-exports";
import config from "../src/aws-exports";
import Link from "next/link";
import Profile from "./profile";
Amplify.configure({ ...awsconfig });

export default function Home() {
  const { font } = useContext(StyleContext);
  const { pomodoroCount } = useContext(TimerContext);
  const { user, signOut } = useAuthenticator((context) => [context.user])

  const imageVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className={`grid min-h-screen w-full grid-rows-[1fr_auto] justify-center bg-primary ${font}`}
    >
      <Head>
        <title>Pomodoro App</title>
        <meta
          name="description"
          content="Pomodoro App built with Next.JS, TypeScript, Tailwind CSS, and Framer Motion"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-[100vh] w-[100vw] flex-col items-center md:flex-row md:justify-between">
        <div className="h-3/5 w-full md:block md:h-full md:w-3/5">
          <motion.div
            initial="initial"
            animate="animate"
            variants={imageVariants}
            style={{ height: "100%" }}
          >
            <Image src={img} alt="pomodoro" className="h-full object-cover" />
          </motion.div>
        </div>
        <div className="flex h-2/5 w-full flex-col items-center justify-center md:h-full md:w-2/5">
          <TimerToggler />
          <Timer />
          <div className="flex items-center justify-center text-xl text-white">
            History: {pomodoroCount}
          </div>
          <Settings />
          <Profile/>
          <Button onClick={signOut} variation="primary">Sign Out</Button>

          
        </div>
      </main>

      {/* <Link href="/profile">
            <a className="flex items-center justify-center text-xl text-white">
              Profile
            </a>
          </Link> */}
      <Footer />
    </div>
  );
}

// function updatePomodoroCount(pomodoroCount: number) {
//   const apiUrl = 'https://ifu9nh73j6.execute-api.us-west-2.amazonaws.com/UpdatePomodoroCount';

//   // Data to be sent to the API
//   const postData = {
//     userId: "exampleUserId",
//     pomodoroCount: pomodoroCount
//   };

//   // Making a POST request using fetch
//   fetch(apiUrl, {
//     method: 'POST', // Method is 'ANY' as per your route, but typically you'll use POST for updates
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(postData), // Convert data into JSON string
//   })
//   .then(response => response.json()) // Parsing the JSON response
//   .then(data => console.log('Success:', data))
//   .catch((error) => console.error('Error:', error));
// }
