import React from 'react';


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
      <div className="text-center text-2xl border-t-2 border-t-black mt-3">
        <p>Total price: {total} KGS</p>
      </div>
    </div>
  );
};

export default Order;