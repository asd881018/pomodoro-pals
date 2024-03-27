// TopBar.tsx
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-20 z-50">
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-8">
          <Link href="/">
            <a className="text-white opacity-100 hover:text-gray-300 transition-colors duration-300">Home</a>
          </Link>
          <Link href="/analytics">
            <a className="text-white opacity-100 hover:text-gray-300 transition-colors duration-300">Analytics</a>
          </Link>
          <Link href="/record">
            <a className="text-white opacity-100 hover:text-gray-300 transition-colors duration-300">Record</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
