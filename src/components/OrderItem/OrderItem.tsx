import React from 'react';

interface Props {
  order: Items;
  onDelete: (item: Items) => void;
}

const OrderItem: React.FC<Props> = ({order, onDelete}) => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <p>{order.name}</p>
      </div>
      <div className="grid grid-cols-3">
        <p>x{order.count}</p>
        <p>{order.price}KGS</p>
        <button onClick={() => onDelete(order)}>delete</button>
      </div>
    </div>
  );
};

export default OrderItem;