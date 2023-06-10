import React from 'react';

interface ProductProps {
  image?: string;
  description?: string;
  link: string;
  name:string;
  powerRating:number
}

const Product: React.FC<ProductProps> = ({ image, description, link, name, powerRating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      <img src={image} alt="Product" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      <p>{name}</p>
      <div className="text-gray-800 mb-2">{description}</div>
      <h3>powerRating: {powerRating}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">View Product</a>
    </div>
  );
};

export default Product;
