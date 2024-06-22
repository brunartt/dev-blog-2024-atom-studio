import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-justify-content-between" style={{ backgroundColor: '#290742' }}>
      <div className="container mx-auto py-8 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
        </h2>
        <p className="text-purple-300 opacity-50 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.
        </p>
        <a href="#" className="text-purple-300 opacity-50 hover:underline">Veja mais</a>
      </div>
      <div className="flex justify-center">
        <div className="w-64 h-64">
          <Image
            src="/imagens/featured-image.png"
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
