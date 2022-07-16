import React from 'react';
import CitySection from './CitySection';
import Header from './Header';
import { useSearchCityQuery } from './useSearchCityQuery';

const App = () => {
  const [search, setSearch] = React.useState('');
  
  const query = useSearchCityQuery(search)

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
