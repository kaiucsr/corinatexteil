import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleBuy = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto:\n🧺 Produto: ${product.name}\n📏 Tamanho: ${product.size}\n🎨 Gostaria de saber as cores disponíveis.\nGostaria de mais informações!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="aspect-[3/4] overflow-hidden relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-primary">
            {product.subCategory}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">
              Tamanho: {product.size}
            </span>
            <div className="flex gap-1">
              {product.colors.map((color, i) => (
                <div 
                  key={i}
                  className="w-3 h-3 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={handleBuy}
            className="w-full bg-primary text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <ShoppingCart size={18} />
            Comprar pelo WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
