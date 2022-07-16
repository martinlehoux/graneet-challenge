import React from 'react';

type HeaderProps = {
  search: string;
  onSearchChange: (search: string) => void;
};

const Header = ({ search, onSearchChange }: HeaderProps) => {
  return (
    <header
      style={{
        backgroundColor: 'lightgrey',
        borderRadius: '1rem',
        fontWeight: 'bold',
        padding: '1rem',
        flexGrow: '1',
        display: 'flex',
        gap: '1rem',
      }}
    >
      <span>Je recherche...</span>
      <input
        value={search}
        onChange={(e) => onSearchChange(e.currentTarget.value)}
        style={{ flexGrow: '1' }}
        type="text"
        placeholder="...une ville, un code postal"
      />
    </header>
  );
};

export default Header;
