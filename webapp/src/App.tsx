import React from 'react';
import { useQuery } from 'react-query';
import type { City, SearchResult } from './city';
import CitySection from './CitySection';
import Header from './Header';
import { useDebounce } from './useDebounce';

const App = () => {
  // TODO: Debounce
  const [search, setSearch] = React.useState('');
  const debounced = useDebounce(search, 300);
  const url = new URL('city/search', 'http://localhost:3000');
  url.searchParams.append('q', debounced);
  const query = useQuery<SearchResult>(['searchCitites', debounced], () =>
    fetch(url).then((res) => res.json()),
  );

  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        padding: '1rem',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Header search={search} onSearchChange={setSearch} />

      <main
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <CitySection
          title="Villes de métropole"
          cities={query.data?.metropoleCities ?? []}
          isLoading={query.isLoading}
        />

        <CitySection
          title="Villes d'outre-mer"
          cities={query.data?.overseasCities ?? []}
          isLoading={query.isLoading}
        />
      </main>
    </div>
  );
};

export default App;
