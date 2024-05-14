export type Product = {
  id: number;
  name: string;
  href: string;
  price: string;
  color: string;
  size?: string;
  inStock: boolean;
  leadTime?: string;
  imageSrc: string;
  imageAlt: string;
};