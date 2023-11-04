import React from 'react';


interface Props {
  setOrder: Items[];
  onDelete: (item: Items) => void;
}

const Order: React.FC<Props> = ({setOrder, onDelete}) => {

  if (setOrder.length === 0) {
    return <p>Order is empty<br/>Please add some item!</p>;
  }

  return (
    <div>
      {
        setOrder ?
          setOrder.map(order => {
            return(
              <div key={order.id} className="grid grid-cols-3">
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
          })
          :
          null
      }
    </div>
  );
};

export default Order;