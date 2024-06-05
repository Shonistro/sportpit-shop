export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: Category;
  short_description: string;
  imageUrl?: string;
}


 