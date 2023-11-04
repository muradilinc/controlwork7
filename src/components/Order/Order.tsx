import React from 'react';
import OrderItem from '../OrderItem/OrderItem.tsx';

interface Props {
  setOrder: Items[];
  total: number;
  onDelete: (item: Items) => void;
}

const Order: React.FC<Props> = ({setOrder, onDelete, total}) => {

  if (setOrder.length === 0) {
    return <p>Order is empty<br/>Please add some item!</p>;
  }

  return (
    <div className='border border-black rounded p-2'>
      {
        setOrder ?
          setOrder.map(order => {
            return <OrderItem order={order} onDelete={onDelete}/>;
          })
          :
          null
      }
      <div className="text-center text-2xl border-t-2 border-t-black mt-3">
        <p>Total price: {total} KGS</p>
      </div>
    </div>
  );
};

export default Order;