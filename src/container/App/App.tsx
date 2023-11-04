import {useState} from 'react';
import Header from '../../components/Header/Header.tsx';
import Items from '../../components/Items/Items.tsx';
import Order from '../../components/Order/Order.tsx';

const App = () => {
  const [order, setOrder] = useState<Items[]>([]);

  const addOrder = (item: Items) => {
    setOrder(prevState => {
      const updateOrder = prevState.map(order => {
        if (item.id === order.id) {
          return {...order, count: order.count + 1};
        }
        return order;
      });

      const existOrder = prevState.find(order => order.id === item.id);

      if (!existOrder) {
        const countItem = prevState.reduce((acc, item) => {
          if (item.id === item.id){
            return acc + 1;
          }
          return acc;
        }, 1);

        updateOrder.push({
          ...item,
          count: countItem
        });
      }

      return updateOrder;
    });
  };

  const deleteOrder = (order: Items) => {
    setOrder(prevState => {
      if (order.count <= 1) {
        return prevState.filter((item => item.id !== order.id));
      } else {
        return prevState.map(item => {
          if(item.id === order.id){
            return {...item, count: item.count - 1};
          }
          return item;
        });
      }
    });
  };

  const totalPrice = order.reduce((acc, item) => {
    return acc + (item.price * item.count);
  }, 0);


  return (
    <>
      <Header/>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-3 gap-x-2">
          <Order setOrder={order} onDelete={deleteOrder} total={totalPrice}/>
          <Items onAdd={addOrder}/>
        </div>
      </div>
    </>
  );
};

export default App;