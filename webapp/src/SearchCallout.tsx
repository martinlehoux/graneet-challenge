import React from 'react';

type SearchCalloutProps = {
  isLoading: boolean;
  count: number;
};

const SearchCallout = ({ isLoading, count }: SearchCalloutProps) => {
  return (
    <div
      style={{
        backgroundColor: calloutColor(isLoading, count),
        color: 'white',
        fontWeight: 'bold',
        padding: '1rem',
      }}
    >
      {calloutText(isLoading, count)}
    </div>
  );
};

const calloutColor = (isLoading: boolean, count: number): string => {
  if (isLoading) return 'grey';
  if (count === 0) return 'red';
  return 'lightgreen';
};

const calloutText = (isLoading: boolean, count: number): string => {
  if (isLoading) return 'Recherche en cours';
  if (count === 0) return 'Aucune ville correspondant au texte saisi';
  if (count === 1) return '1 ville correspondant au texte choisi';
  return `${count} villes correspondant au text choisi`;
};

export default SearchCallout;
