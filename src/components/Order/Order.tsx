import React from 'react';

interface Props {
  setOrder: Items[];
}

const Order: React.FC<Props> = ({setOrder}) => {
  return (
    <div>
      {
        setOrder.length === 0 ? "Order is empty" : null
      }
    </div>
  );
};

export default Order;