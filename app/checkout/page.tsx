import CartGrid from "./components/CartGrid";
import Steps from "./components/Steps";
import { useCheckoutData } from "./useCheckoutData";

const CheckoutPage = () => {
  const { steps, cartItems } = useCheckoutData();

  return (
    <div className="max-w-xl mx-auto border rounded-lg p-8">
      <h1 className="font-bold text-5xl">Checkout</h1>
      <br />
      <br />
      <Steps steps={steps} />
      <br />
      <br />
      <CartGrid title="Your Shopping Cart" items={cartItems} />
    </div>
  );
};

export default CheckoutPage;
