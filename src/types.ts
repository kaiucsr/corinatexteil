export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  size: string;
  colors: string[];
  category: string;
  subCategory: string;
  image: string;
}

export type Category = 
  | 'Todos os produtos'
  | 'Toalhas'
  | 'Toalha de banho'
  | 'Toalha de rosto'
  | 'Toalha social'
  | 'Toalha lavabo'
  | 'Banhão'
  | 'Panos de prato'
  | 'Tapetes'
  | 'Tapetes pezinho';
