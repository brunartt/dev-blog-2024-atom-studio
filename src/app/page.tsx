import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex justify-between bg-roxo">
      <div className="container mx-auto py-8 text-purple-300 opacity-50 " style={{ width: '500px', marginLeft: '10rem', paddingRight: '20px' }}>
        <h2 className="text-purple-300 opacity-50 text-3xl font-bold mb-4">
          Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
        </h2>
        <p className="text-white mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.
        </p>
        <a href="#" className="text hover:underline flex items-center">
          Veja mais
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-1 text-verde">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <div className="flex justify-center items-center"style={{ marginLeft: '10rem', paddingRight: '100px', paddingBottom: '60px' , paddingTop: '20px'}}> 
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
    
  );
}

