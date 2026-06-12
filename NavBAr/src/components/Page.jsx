import React from 'react';
import recipes from '../data/Recipe.js';

export default function Page() {


  return (
    <div className="flex flex-wrap gap-4 p-4">
     <div className="flex flex-wrap gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border border-gray-300 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} className="w-40 h-40 rounded-lg mb-2" />
          </div>
        ))}
     </div>
    </div>
  );
}