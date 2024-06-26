"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Interface para definir a estrutura de dados dos resultados de pesquisa
interface SearchResult {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Search: React.FC = () => {
  const router = useRouter(); // Obtém o objeto de roteamento do Next.js
  const { query } = router.query;  // Obtém o parâmetro 'query' da URL
  const [results, setResults] = useState<SearchResult[]>([]); // Estado para armazenar os resultados da pesquisa

  // Efeito useEffect que dispara sempre que o valor de 'query' muda
  useEffect(() => {
    if (query) {  // Verifica se há um valor em 'query'
      const fetchResults = async () => {  // Função assíncrona para buscar os resultados simulados
        const searchResults: SearchResult[] = [
          { id: 1, title: 'Result 1', image: '/imagens/post-1.png', description: 'Descrição do resultado 1' },
          { id: 2, title: 'Result 2', image: '/imagens/post-2.png', description: 'Descrição do resultado 2' },
        ];
        setResults(searchResults); // Atualiza o estado com os resultados simulados
      };
      fetchResults(); // Chama a função para buscar os resultados
    }
  }, [query]); // Array de dependências para o useEffect, garante que o efeito só seja refeito quando 'query' mudar

  return (
    <div className="container mx-auto py-8"> {/* Container principal para centralizar o conteúdo */}
      <h1 className="text-3xl font-bold mb-4">Search Results for &quot;{query}&quot;</h1> {/* Título dos resultados de pesquisa */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
        {results.map((result) => (
          <div key={result.id} className="p-4 border rounded-lg">
            <Image
              src={result.image}
              alt={result.title}
              layout="responsive"
              width={500}
              height={300}
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-2">{result.title}</h3>
            <p>{result.description}</p> {/* Descrição do resultado */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
