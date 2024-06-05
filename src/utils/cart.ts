// types/cart.ts
export interface CartItem {
    id: number;
    product: {
      id: number;
      name: string;
      price: number; 
      image: string;
    };
    quantity: number;
    price_sum: number;
  }
  
  