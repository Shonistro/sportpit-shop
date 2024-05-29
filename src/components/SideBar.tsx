import React from 'react';

interface SidebarProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sortOption, setSortOption }) => {
  return (
    <aside className="w-1/5 p-4 bg-white text-black border-r border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-center">Сортировка</h2>
      <div>
        <button
          className={`block w-full text-left px-4 py-2 rounded mb-2 transition-all duration-300 ease-in-out transform ${sortOption === 'default' ? 'bg-gray-200 text-black' : 'hover:bg-gray-100 hover:scale-105'}`}
          onClick={() => setSortOption('default')}
        >
          По умолчанию
        </button>
        <button
          className={`block w-full text-left px-4 py-2 rounded mb-2 transition-all duration-300 ease-in-out transform ${sortOption === 'priceAsc' ? 'bg-gray-200 text-black' : 'hover:bg-gray-100 hover:scale-105'}`}
          onClick={() => setSortOption('priceAsc')}
        >
          По возрастанию цены
        </button>
        <button
          className={`block w-full text-left px-4 py-2 rounded mb-2 transition-all duration-300 ease-in-out transform ${sortOption === 'priceDesc' ? 'bg-gray-200 text-black' : 'hover:bg-gray-100 hover:scale-105'}`}
          onClick={() => setSortOption('priceDesc')}
        >
          По убыванию цены
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
