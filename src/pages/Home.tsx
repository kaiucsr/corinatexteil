import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Palette, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, YEARS_OF_EXPERIENCE } from '../constants';

export default function Home() {
  const benefits = [
    {
      icon: <ShieldCheck className="text-primary" size={24} />,
      title: "Alta Qualidade",
      description: "Processos rigorosos para garantir o melhor acabamento e absorção."
    },
    {
      icon: <Heart className="text-primary" size={24} />,
      title: "Conforto",
      description: "Toque macio e suave que proporciona bem-estar após cada banho."
    },
    {
      icon: <CheckCircle2 className="text-primary" size={24} />,
      title: "Durabilidade",
      description: "Produtos feitos para resistir ao tempo e manter a maciez original."
    },
    {
      icon: <Palette className="text-primary" size={24} />,
      title: "Variedade",
      description: "Ampla gama de cores e modelos para combinar com seu estilo."
    }
  ];

  const productCategories = [
    { title: "Toalhas de Banho", image: "https://picsum.photos/seed/bath-cat/400/500", desc: "Conforto absoluto para seu momento." },
    { title: "Banhão", image: "https://picsum.photos/seed/big-cat/400/500", desc: "Tamanho extra para máximo aconchego." },
    { title: "Panos de Prato", image: "https://picsum.photos/seed/kitchen-cat/400/500", desc: "Praticidade e beleza para sua cozinha." },
    { title: "Tapetes", image: "https://picsum.photos/seed/rug-cat/400/500", desc: "Segurança e suavidade para seus pés." }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/textile-hero-2/1920/1080" 
            alt="Textile background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/80 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <div className="max-w-3xl py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="h-[1px] w-12 bg-primary" />
                <span className="text-primary font-semibold tracking-widest uppercase text-xs">
                  {YEARS_OF_EXPERIENCE} Anos de Excelência
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-ink leading-[1.1] mb-8">
                Toalhas que unem <br />
                <span className="text-primary italic">conforto</span> e <br />
                <span className="text-secondary italic">qualidade</span>
              </h1>
              <p className="text-lg md:text-xl text-muted mb-12 max-w-xl leading-relaxed">
                Desde 2009, a <strong>{COMPANY_NAME}</strong> transforma fios em abraços. 
                Descubra nossa coleção de produtos têxteis feitos para durar.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/produtos"
                  className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                >
                  Ver Coleção Completa
                  <ArrowRight size={20} />
                </Link>
                <a 
                  href="#sobre"
                  className="bg-white/50 backdrop-blur-sm text-ink px-10 py-5 rounded-full text-lg font-bold hover:bg-white transition-all flex items-center justify-center border border-white/20"
                >
                  Nossa História
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Identity / Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Identidade</span>
              <h2 className="text-4xl font-serif font-bold mb-6">Elegância em cada detalhe</h2>
              <p className="text-muted text-lg leading-relaxed">
                Nossa marca é definida pela sofisticação moderna e pelo aconchego. 
                Buscamos o equilíbrio perfeito entre tons neutros e a energia das cores.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://picsum.photos/seed/brand-1/600/600" alt="Brand" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden mt-12">
                <img src="https://picsum.photos/seed/brand-2/600/600" alt="Brand" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">O que produzimos para você</h2>
              <p className="text-muted text-lg">
                De toalhas de banho luxuosas a panos de prato funcionais, 
                nossa linha completa atende todas as necessidades da sua casa.
              </p>
            </div>
            <Link to="/produtos" className="text-primary font-bold flex items-center gap-2 hover:underline group">
              Ver todos os produtos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-medium">{cat.desc}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">{cat.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/textile-about-2/800/1000" 
                  alt="Nossa tradição"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-secondary text-white p-10 rounded-[2.5rem] shadow-2xl hidden lg:block max-w-[280px]">
                <Star className="mb-4 text-yellow-400" fill="currentColor" size={32} />
                <p className="text-4xl font-serif font-bold mb-2">17 Anos</p>
                <p className="text-sm font-medium opacity-80 leading-relaxed">De tradição, qualidade e respeito ao consumidor.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Nossa História</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-8">
                Tradição que se sente <br />no toque
              </h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  A <strong>{COMPANY_NAME}</strong> nasceu com um propósito claro: oferecer o que há de melhor em artigos têxteis para o lar. 
                  Ao longo de quase duas décadas, aprimoramos nossas técnicas e selecionamos as melhores fibras para garantir que cada produto seja sinônimo de luxo e durabilidade.
                </p>
                <p>
                  Nossa sede em Fortaleza é o coração de uma operação que valoriza o trabalho bem feito. 
                  Acreditamos que uma toalha não é apenas um acessório, mas parte essencial do seu ritual de cuidado pessoal.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-serif font-bold text-primary mb-1">100%</p>
                    <p className="text-sm font-medium text-muted uppercase tracking-wider">Algodão Premium</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-primary mb-1">50k+</p>
                    <p className="text-sm font-medium text-muted uppercase tracking-wider">Clientes Felizes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
              O padrão Amanda Corina
            </h2>
            <p className="text-muted text-lg">
              Investimos em tecnologia e design para que você tenha sempre o melhor em sua casa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-ink mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-10 lg:px-12">
          <div className="bg-primary rounded-[4rem] overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <img 
                src="https://picsum.photos/seed/texture-cta/1200/600" 
                alt="Texture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 px-8 py-20 md:py-32 text-center text-white max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight">
                Leve o conforto da nossa fábrica para sua casa
              </h2>
              <p className="text-xl opacity-90 mb-14 leading-relaxed">
                Nossa equipe está pronta para te atender e ajudar a escolher as melhores opções para seu enxoval.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  to="/produtos"
                  className="bg-white text-primary px-12 py-6 rounded-full text-xl font-bold hover:bg-accent transition-all shadow-2xl"
                >
                  Ver Catálogo de Produtos
                </Link>
                <a 
                  href="#contato"
                  className="text-white border border-white/30 px-12 py-6 rounded-full text-xl font-bold hover:bg-white/10 transition-all"
                >
                  Falar com Consultor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
