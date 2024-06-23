"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="text-white p-4 bg-roxo">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src="/imagens/logo.png"
                        width={80}
                        height={80}
                        alt="Logo"
                    />
                </div>
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
                <nav className={`md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 mt-4 md:mt-0">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">Sobre</Link></li>
                        <li><Link href="/categories">Categorias</Link></li>
                        <li><Link href="/contact">Contato</Link></li>
                    </ul>
                </nav>
                <div className="relative ml-auto">
                    <input
                        type="search"
                        id="location-search"
                        className="block w-36 md:w-48 lg:w-64 p-2 text-sm text-gray-900 bg-roxo-escuro rounded-l-lg focus:border-roxo-claro focus:outline-none"
                        placeholder="Pesquisar"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 h-full px-3 md:px-4 text-sm font-medium text-white bg-roxo-claro rounded-r-lg border border-roxo-claro rounded-l-none"
                    >
                        <svg className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
