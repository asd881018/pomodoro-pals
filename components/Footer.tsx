import Link from 'next/link';

interface FooterProps {
  page: string;
}

const Footer = ({ page } : FooterProps) => {
  return (
    <div className={`bottom-0 left-0 w-full z-50 ${page === 'index' ? 'bg-transparent md:fixed' : 'bg-primary'}`}>
      <div className="flex justify-center items-center p-4">
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 font-roboto text-center text-[.6rem] text-tertiary md:text-xs">
          <Link href="">
            <a className="text-white uppercase opacity-100 hover:text-gray-300 transition-colors duration-300">
              Diego Buencamino
            </a>
          </Link>
          <Link href="">
            <a className="text-white uppercase opacity-100 hover:text-gray-300 transition-colors duration-300">
              Elaine Abraham
            </a>
          </Link>
          <Link href="">
            <a className="text-white uppercase opacity-100 hover:text-gray-300 transition-colors duration-300">
              Matt Tsai
            </a>
          </Link>
          <Link href="">
            <a className="text-white uppercase opacity-100 hover:text-gray-300 transition-colors duration-300">
              Katherine (Katie) Sun
            </a>
          </Link>
          <Link href="">
            <a className="text-white uppercase opacity-100 hover:text-gray-300 transition-colors duration-300">
              Mikhael Opeyemi-Olatunji
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
