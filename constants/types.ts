export interface Product {
  id: string;
  name: string;
  price: string;
  code: string;
  discountedPrice?: string | null;
  image: string;
}
