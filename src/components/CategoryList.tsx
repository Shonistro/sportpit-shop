import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../utils/categories';

const CategoryList = () => {
  return (
    <div className="col-span-4 p-2 rounded-md bg-white shadow-md ml-4">
      <h2 className="text-xl font-bold mb-2 text-blue-600">Categories</h2>
      <ul className="space-y-1">
        {categories.map(category => (
          <li
            key={category.id}
            className="bg-white rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Link
              to={`/category/${category.slug}`}
              className="w-full text-left flex justify-between items-center py-2 px-3 text-sm font-semibold hover:bg-blue-600 hover:text-white"
            >
              {category.name}
              <span className="text-blue-600 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
