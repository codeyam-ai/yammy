import React from 'react';
import CartItemCard, { CartItem } from './CartItemCard';

interface CartGridProps {
  title: string;
  items: CartItem[];
}

const CartGrid = ({ title, items }: CartGridProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {items.map(item => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartGrid;
