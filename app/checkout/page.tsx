import CartGrid from "./components/CartGrid";
import Steps, { Step } from "./components/Steps";

const steps: Step[] = [
  { id: 'Step 1', name: 'Job details', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Application form', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
];

const cartItems = [
  { id: 1, name: 'Apple MacBook Pro', price: 1999.99, quantity: 1 },
  { id: 2, name: 'USB-C to USB Adapter', price: 19.99, quantity: 2 },
  { id: 3, name: 'Thunderbolt Cable', price: 49.99, quantity: 1 },
];

const CheckoutPage = () => {
  return (
    <div className="max-w-xl mx-auto border rounded-lg p-8">
      <h1 className="font-bold text-5xl">Checkout</h1>
      <br /><br />
      <Steps steps={steps} />
      <br /><br />
      <CartGrid title="Your Shopping Cart" items={cartItems} />
    </div>
  );
};

export default CheckoutPage;
