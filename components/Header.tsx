// Header.tsx
import Link from 'next/link';

import { Amplify } from "aws-amplify";
import { Button, useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react'
import awsconfig from "../src/aws-exports";

// import config from "../src/aws-exports";
// import Link from "next/link";

import Profile from '../pages/profile';
Amplify.configure({ ...awsconfig });

const Header = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user])

  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-20 z-50">
      <div className="flex justify-between items-center p-4 space-x-4 md:space-x-8">
        <div className="flex space-x-4 md:space-x-8">
          <Link href="/">
            <a className="text-white opacity-100 hover:text-gray-300 transition-colors duration-300">Home</a>
          </Link>
          <Link href="/analytics">
            <a className="text-white opacity-100 hover:text-gray-300 transition-colors duration-300">Analytics</a>
          </Link>
          <Link href="/summary">
            <a className="text-white opacity-100 hover:text-gray-300 transition-colors duration-300">Summary</a>
          </Link>
          <Link href="/record">
            <a className="text-white opacity-100 hover:text-gray-300 transition-colors duration-300">Record</a>
          </Link>
        </div>
        <div className="flex space-x-4 md:space-x-8">
          <Profile />
          <Link href="/" onClick={signOut}>
            <a className="text-white opacity-100 hover:text-gray-300 transition-colors duration-300">Sign Out</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
