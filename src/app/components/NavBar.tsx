"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = event.currentTarget.search.value;
    router.push(`/search?query=${query}`);
  };

  return (
    <nav className="bg-roxo p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Image
            src="/imagens/logo.png"
            alt="Logo"
            width={120}
            height={100}
            className="rounded-t-lg"
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/sobre" className="text-white">Sobre</Link>
          <Link href="/categorias" className="text-white">Categorias</Link>
          <Link href="/contato" className="text-white">Contato</Link>
        </div>
        <div className="hidden md:flex">
          <form onSubmit={handleSearch} className="flex">
            <input type="text" name="search" placeholder="Buscar" className="p-2 rounded-l-md bg-roxo-escuro" />
            <button type="submit" className="bg-roxo-claro text-white p-2 rounded-r-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.38 4.38a1 1 0 11-1.42 1.42l-4.38-4.38zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block text-white px-2 py-1">Home</Link>
          <Link href="/sobre" className="block text-white px-2 py-1">Sobre</Link>
          <Link href="/categorias" className="block text-white px-2 py-1">Categorias</Link>
          <Link href="/contato" className="block text-white px-2 py-1">Contato</Link>
          <div className="flex p-2">
            <form onSubmit={handleSearch} className="flex w-full">
              <input type="text" name="search" placeholder="Buscar" className="p-2 rounded-l-md flex-grow" />
              <button type="submit" className="bg-roxo text-white p-2 rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.38 4.38a1 1 0 11-1.42 1.42l-4.38-4.38zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
