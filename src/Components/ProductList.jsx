import React, { useState } from 'react';
import Product1 from '../Assets/frock.jpg';
import Product2 from '../Assets/skirt.jpg';
import Product3 from '../Assets/jeans.jpg';
import Product4 from '../Assets/saree.jpeg';
import Product5 from '../Assets/jacket.jpg';
import Product6 from '../Assets/salwar.jpg';
import Product7 from '../Assets/blouse.jpg';


const ProductList = () => {

  const [products,setProducts] = useState([
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },

    {
      id:2,
      name: 'Frock',
      href: '#',
      imageSrc: Product1,
      imageAlt: "Girls frock design",
      price: '$40',
      color: 'Red',
    },
    {
      id:3,
      name: 'Skirt',
      href: '#',
      imageSrc: Product2,
      imageAlt: "Girls short skirt",
      price: '$35',
      color: 'Purpal',
    },
    {
      id:4,
      name: 'Jeans',
      href: '#',
      imageSrc: Product3,
      imageAlt: "Boys jeans",
      price: '$34',
      color: 'Green',
    },
    {
      id:5,
      name: 'Saree',
      href: '#',
      imageSrc: Product4,
      imageAlt: "Woman saree",
      price: '$29',
      color: 'Orange',
    },
    {
      id:6,
      name: 'Jacket',
      href: '#',
      imageSrc: Product5,
      imageAlt: "Men jacket",
      price: '$29',
      color: 'Black',
    },
    {
      id:7,
      name: 'Salwar',
      href: '#',
      imageSrc: Product6,
      imageAlt: "Women Salwar",
      price: '$29',
      color: 'Red',
    },
    {
      id:8,
      name: 'Blouse',
      href: '#',
      imageSrc: Product7,
      imageAlt: "Women Blouse",
      price: '$20',
      color: 'Pink',
    },
    // More products...
  ]);

  return <div className="bg-white">
  <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>;
};

export default ProductList;
