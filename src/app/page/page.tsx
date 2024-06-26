'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ScrollReveal from 'scrollreveal';
import React from 'react';


export default function Page() {
  const [darkMode, setDarkMode] = useState(false); // Estado para controlar o modo claro/escuro

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Acesso seguro ao window aqui
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
      if (prefersDarkMode) {
        document.documentElement.classList.add('dark');
      }
    }

    // Verifica se o modo escuro está ativado no sistema e ajusta conforme necessário
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    if (prefersDarkMode) {
      document.documentElement.classList.add('dark'); // Adiciona a classe 'dark' ao HTML se estiver em modo escuro
    }
  }, []);

  const toggleDarkMode = () => {
    const body = document.documentElement;
    const isDarkMode = body.classList.contains('dark');
    setDarkMode(!isDarkMode); // Alterna o estado de darkMode

    // Adiciona ou remove a classe 'dark' do elemento HTML para aplicar a estilização do modo escuro
    if (!isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  };

  return (
    <>
      {/* Botão para alternar modo claro e escuro */}
      <div className="fixed top-4 right-4 z-50">
        <button
          className={`px-3 py-2 rounded-md shadow-md focus:outline-none ${darkMode ? 'bg-roxo-claro text-white' : 'bg-roxo-escuro text-white'}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Conteúdo da página */}
      <div className={`containerPai flex flex-col sm:flex-row justify-between ${darkMode ? 'bg-roxo-escuro' : 'bg-roxo'}`}>
        <div className="containerTexto mx-auto py-8 text-roxo-claro text-center sm:text-left sm:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
          </h2>
          <p className={`${darkMode ? 'text-white' : 'text-white'} mb-8`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.
          </p>
          <a href="#" className="text-roxo-claro flex items-center justify-center lg:justify-start transition duration-300 transform hover:scale-105">
            Veja mais
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-1 text-verde">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        <div className="containerImageCode flex justify-center items-center mb-10 sm:w-1/2">
          <div className="rounded-md overflow-hidden">
            <Image
              src="/imagens/codeImage.png"
              alt="Logo"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <hr className={`border-verde border-t-4 w-full ${darkMode ? 'border-verde' : 'border-verde'}`} />

      {/* Seção de artigos */}
      <div className={`containerArtigos ${darkMode ? 'dark:bg-roxo-escuro' : 'bg-white'}`}>
        <div className="container mx-auto flex flex-wrap">
          {/* Artigo Principal */}
          <div className="p-1 mt-10  w-full md:w-1/2 lg:w-2/5 reveal">
            <Image
              src="/imagens/post-1.png"
              alt="Conheça as principais técnicas para conseguir uma vaga internacional em programação"
              layout="responsive"
              width={500}
              height={580}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>Janeiro 04, 2022</p>
              <h3 className={`${darkMode ? 'text-roxo-claro' : 'text-roxo-escuro'} text-2xl font-bold mb-2`}>Começando no ReactJS em 2022</h3>
              <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque.
              </p>
            </div>
          </div>

          {/* Outros artigos ... */}
          <div className="textSolo ps-10 ms-10 w-full md:w-1/2 lg:w-2/5 divide-y reveal">
            <div className="p-10">
              <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>Janeiro 04, 2022</p>
              <h3 className={`${darkMode ? 'text-roxo-claro' : 'text-roxo-escuro'} text-2xl font-bold mb-2`}>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h3>
              <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.
              </p>
            </div>
            <div className='p-10 pt-7'>
              <div>
                <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>Janeiro 04, 2022</p>
                <h3 className={`${darkMode ? 'text-roxo-claro' : 'text-roxo-escuro'} text-2xl font-bold mb-2`}>Veja a evolução do Front-end na prática</h3>
                <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda seção de artigos */}
        <div className="container mx-auto flex flex-wrap justify-start">
          {/* Artigos Menores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
            {/* Artigo 1 */}
            <div className="p-4 reveal">
              <Image
                src="/imagens/post-2.png"
                alt="post2"
                layout="responsive"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>Janeiro 04, 2022</p>
                <h3 className={`${darkMode ? 'text-roxo-claro' : 'text-roxo-escuro'} text-2xl font-bold mb-2`}>10 dicas para conseguir a vaga desejada</h3>
                <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.
                </p>
              </div>
            </div>

            {/* Artigo 2 */}
            <div className="p-4 reveal">
              <Image
                src="/imagens/post-3.png"
                alt="Outro artigo"
                layout="responsive"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>Janeiro 04, 2022</p>
                <h3 className={`${darkMode ? 'text-roxo-claro' : 'text-roxo-escuro'} text-2xl font-bold mb-2`}>Deixe seu código mais semântico com essas dicas</h3>
                <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
                </p>
              </div>
            </div>

            {/* Artigo 3 */}
            <div className="p-4 reveal">
              <Image
                src="/imagens/post-4.png"
                alt="Mais um artigo"
                layout="responsive"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>Janeiro 04, 2022</p>
                <h3 className={`${darkMode ? 'text-roxo-claro' : 'text-roxo-escuro'} text-2xl font-bold mb-2`}>Use essas dicas nas suas aplicações mobile</h3>
                <p className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
