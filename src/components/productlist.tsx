import React, { useState } from "react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface ProductPageProps {
  products: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(selectedProduct === product ? null : product);
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative w-48 h-48 m-4 overflow-hidden cursor-pointer"
          onClick={() => handleProductClick(product)}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {selectedProduct === product && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black bg-opacity-50 p-4 text-white"
            >
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p>{product.description}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
