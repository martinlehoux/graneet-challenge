import React from 'react';

import type { City } from './city';

type CityCardProps = {
  city: City;
};

const CityCard = ({ city }: CityCardProps) => (
  <article
    key={city.code}
    style={{
      backgroundColor: 'darkgrey',
      fontWeight: 'bold',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
    }}
  >
    <span style={{ color: 'white' }}>{city.name}</span>
    <span style={{ color: 'grey' }}>{city.postalCode}</span>
  </article>
);

export default CityCard;
