import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos os produtos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categories: Category[] = [
    'Todos os produtos',
    'Toalhas',
    'Toalha de banho',
    'Toalha de rosto',
    'Toalha social',
    'Toalha lavabo',
    'Banhão',
    'Panos de prato',
    'Tapetes',
    'Tapetes pezinho'
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product: Product) => {
      const matchesCategory = 
        selectedCategory === 'Todos os produtos' || 
        product.category === selectedCategory || 
        product.subCategory === selectedCategory;
      
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-accent/30">
      <div className="container mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="mb-12 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-4">
            Nossa Coleção
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Qualidade que você sente na pele, tradição que você confia.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                  <Filter size={14} />
                  Categorias
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                          selectedCategory === category
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-muted hover:bg-white hover:text-primary'
                        }`}
                      >
                        {category}
                        {selectedCategory === category && <motion.div layoutId="active-dot" className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/10">
                <h4 className="font-serif font-bold text-secondary mb-2">Precisa de ajuda?</h4>
                <p className="text-xs text-muted mb-4">Fale com um de nossos consultores agora mesmo.</p>
                <button className="text-xs font-bold text-secondary underline">Contato via WhatsApp</button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Search and Mobile Filter Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                <input 
                  type="text"
                  placeholder="O que você está procurando?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
              </div>
              
              <button 
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex items-center justify-center gap-2 bg-white px-6 py-4 rounded-2xl border border-gray-100 font-bold text-ink shadow-sm"
              >
                <SlidersHorizontal size={20} />
                Filtros
                {selectedCategory !== 'Todos os produtos' && (
                  <span className="w-2 h-2 bg-primary rounded-full" />
                )}
              </button>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-8 px-2">
              <p className="text-muted font-medium text-sm">
                Mostrando <span className="text-ink font-bold">{filteredProducts.length}</span> produtos
              </p>
              <div className="flex items-center gap-2 text-muted">
                <span className="text-xs uppercase tracking-widest font-bold">Categoria: {selectedCategory}</span>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product: Product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-gray-200"
              >
                <div className="max-w-xs mx-auto">
                  <p className="text-xl font-serif font-bold text-ink mb-2">Nenhum produto encontrado</p>
                  <p className="text-muted mb-8">Tente ajustar seus filtros ou busca para encontrar o que procura.</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('Todos os produtos');
                      setSearchQuery('');
                    }}
                    className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20"
                  >
                    Limpar Filtros
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[3rem] z-[70] lg:hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-serif font-bold text-ink">Filtrar por</h3>
                  <button 
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="p-2 bg-accent rounded-full text-muted"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Categorias</p>
                    <div className="grid grid-cols-1 gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsMobileFiltersOpen(false);
                          }}
                          className={`w-full text-left px-6 py-4 rounded-2xl text-base font-medium transition-all flex items-center justify-between ${
                            selectedCategory === category
                              ? 'bg-primary text-white'
                              : 'bg-accent/50 text-ink'
                          }`}
                        >
                          {category}
                          {selectedCategory === category && <ChevronDown size={18} className="-rotate-90" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button 
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20"
                  >
                    Ver Resultados
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
