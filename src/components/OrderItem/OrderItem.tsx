import React from 'react';
import {Trash} from '@phosphor-icons/react';

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
      <div className="grid  grid-cols-3">
        <p>x{order.count}</p>
        <p>{order.price} KGS</p>
        <button onClick={() => onDelete(order)}><Trash className="text-red-600" size={25} /></button>
      </div>
    </div>
  );
};

export default OrderItem;