import { Step } from "./components/Steps";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export function useCheckoutData(): { steps: Step[]; cartItems: CartItem[] } {
  const steps: Step[] = [
    { id: "Step 1", name: "Job details", href: "#", status: "complete" },
    { id: "Step 2", name: "Application form", href: "#", status: "current" },
    { id: "Step 3", name: "Preview", href: "#", status: "upcoming" },
  ];

  const cartItems: CartItem[] = [
    { id: 1, name: "Apple MacBook Pro", price: 1999.99, quantity: 1 },
    { id: 2, name: "USB-C to USB Adapter", price: 19.99, quantity: 2 },
    { id: 3, name: "Thunderbolt Cable", price: 49.99, quantity: 1 },
  ];
  return { steps, cartItems };
}
