import Link from 'next/link';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div className="flex justify-center items-center p-4">
        <div className="flex space-x-8 font-roboto text-center text-[.6rem] text-tertiary md:text-xs">
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
