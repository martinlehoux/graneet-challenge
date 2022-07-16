import React from 'react';

import type { City } from './city';
import CityCard from './CityCard';
import SearchCallout from './SearchCallout';
import Spinner from './Spinner';

type CitySectionProps = {
  title: string;
  cities: City[];
  isLoading: boolean;
};

const CitySection = ({ title, cities, isLoading }: CitySectionProps) => {
  return (
    <section
      style={{
        flexGrow: '1',
        backgroundColor: 'lightgrey',
        borderRadius: '1rem',
        padding: '1rem',
        gap: '1rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <SearchCallout count={cities.length} isLoading={isLoading} />
      {isLoading && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}
        >
          {cities.map((city) => (
            <CityCard key={city.code} city={city} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CitySection;
