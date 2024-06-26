'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from 'scrollreveal';

export default function Page() {
  useEffect(() => {
    // Configuração do ScrollReveal para animações
    ScrollReveal().reveal('.reveal', {
      delay: 100,
      distance: '50px',
      origin: 'bottom',
      duration: 800,
      reset: true,
    });
  }, []);

  return (
    <>
      {/* Seção principal com título e link */}
      <div className="flex justify-between bg-roxo">
        <div className="container mx-auto py-8 text-roxo-claro" style={{ width: '620px', marginLeft: '320px', paddingRight: '20px' }}>
          <h2 className="text-3xl font-bold mb-4">
            Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
          </h2>
          <p className="text-white mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.
          </p>
          <a href="#" className="text-roxo-claro flex items-center transition duration-300 transform hover:scale-105">
            Veja mais
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-1 text-verde">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Imagem ao lado do título */}
        <div className="flex justify-center items-center" style={{ marginLeft: '310px', paddingRight: '100px', paddingBottom: '60px', paddingTop: '20px' }}>
          <div className="rounded-md">
            <Image
              src="/imagens/codeImage.png"
              alt="Logo"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <hr className="border-verde border-t-4 w-full" />

      {/* Seção de artigos */}
      <div className="bg-white py-16">
        <div className="container mx-auto flex flex-wrap justify-start">
          {/* Artigo Principal */}
          <div className="p-4 w-full md:w-1/2 lg:w-2/5 reveal">
            <Image
              src="/imagens/post-1.png"
              alt="Conheça as principais técnicas para conseguir uma vaga internacional em programação"
              layout="responsive"
              width={400}
              height={580}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-black font-medium mb-2">Janeiro 04, 2022</p>
              <h3 className="text-roxo-escuro text-2xl font-bold mb-2">Começando no ReactJS em 2022</h3>
              <p className="text-black font-medium mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque.
              </p>
            </div>
          </div>
          <div className="ps-10 ms-10 w-full md:w-1/2 lg:w-2/5 divide-y reveal ">
            <div className="p-5">
              <p className="text-black font-medium mb-2">Janeiro 04, 2022</p>
              <h3 className="text-roxo-escuro text-2xl font-bold mb-2">Conheça as principais técnicas para conseguir uma vaga internacional em programação</h3>
              <p className="text-black font-medium mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.
              </p>
            </div>
            <div className='p-4 pt-7'>
              <div>
                <p className="text-black font-medium mb-2">Janeiro 04, 2022</p>
                <h3 className="text-roxo-escuro text-2xl font-bold mb-2">Veja a evolução do Front-end na prática</h3>
                <p className="text-black font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.
                </p>
              </div>
            </div>
          </div>

          {/* Outros artigos ... */}
        </div>
      </div>

      {/* Segunda seção de artigos */}
      <div className="bg-white py-16">
        <div className="container mx-auto flex flex-wrap justify-start">
          {/* Artigo Principal 2 */}

          {/* Artigos Menores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
                <p className="text-black font-medium mb-2">Janeiro 04, 2022</p>
                <h3 className="text-roxo-escuro text-2xl font-bold mb-2">10 dicas para conseguir a vaga desejada</h3>
                <p className="text-black font-medium">
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
                <p className="text-black font-medium mb-2">Janeiro 04, 2022</p>
                <h3 className="text-roxo-escuro text-2xl font-bold mb-2">Deixe seu código mais semântico com essas dicas</h3>
                <p className="text-black font-medium">
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
                <p className="text-black font-medium mb-2">Janeiro 04, 2022</p>
                <h3 className="text-roxo-escuro text-2xl font-bold mb-2">Use essas dicas nas suas aplicações mobile</h3>
                <p className="text-black font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
