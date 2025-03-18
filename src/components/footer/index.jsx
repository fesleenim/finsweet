'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">Finstreet 118 2561 Fintown</p>
          <p className="text-sm">Hello@finsweet.com  020 7993 2905</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
