import React from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p>${item.price.toFixed(2)} (Quantity: {item.quantity})</p>
    </div>
  );
};

export default CartItemCard;
