import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

export default function Footer() {
  return (
    <footer id="contato" className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">{COMPANY_NAME}</h3>
            <p className="text-gray-500 leading-relaxed">
              Desde 2009 unindo conforto e qualidade em cada fibra. Transformando sua casa em um refúgio de bem-estar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-gray-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-primary transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="text-gray-500 hover:text-primary transition-colors">Produtos</Link></li>
              <li><a href="#sobre" className="text-gray-500 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-gray-500 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-serif font-bold text-gray-900 mb-6">Categorias</h4>
            <ul className="space-y-4">
              <li><Link to="/produtos" className="text-gray-500 hover:text-primary transition-colors">Toalhas de Banho</Link></li>
              <li><Link to="/produtos" className="text-gray-500 hover:text-primary transition-colors">Toalhas de Rosto</Link></li>
              <li><Link to="/produtos" className="text-gray-500 hover:text-primary transition-colors">Panos de Prato</Link></li>
              <li><Link to="/produtos" className="text-gray-500 hover:text-primary transition-colors">Tapetes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold text-gray-900 mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Rua das Indústrias, 123 - Distrito Têxtil, Fortaleza - CE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone size={20} className="text-primary shrink-0" />
                <span>(88) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail size={20} className="text-primary shrink-0" />
                <span>contato@amandacorina.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm italic">
            © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm">
            Desenvolvido com carinho para o seu conforto.
          </p>
        </div>
      </div>
    </footer>
  );
}
