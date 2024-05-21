import React, { useState, FormEvent } from 'react';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Здесь вы можете выполнить логику поиска, например, перенаправить на страницу каталога с параметром поиска
    console.log('Search query:', searchQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white border-b-2 border-gray-300 rounded-full overflow-hidden w-96"
    >
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="py-2 px-4 w-full outline-none text-gray-800"
      />
      <button
        type="submit"
        className="bg-white text-gray-600 px-4 py-2 hover:text-gray-800 transition-colors duration-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;