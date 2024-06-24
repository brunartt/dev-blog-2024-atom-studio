"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SearchResult {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Search: React.FC = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        const searchResults: SearchResult[] = [
          { id: 1, title: 'Result 1', image: '/imagens/post-1.png', description: 'Descrição do resultado 1' },
          { id: 2, title: 'Result 2', image: '/imagens/post-2.png', description: 'Descrição do resultado 2' },
        ];
        setResults(searchResults);
      };
      fetchResults();
    }
  }, [query]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Search Results for &quot;{query}&quot;</h1>
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
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
