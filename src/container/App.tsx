import React, {useState} from 'react';
import Header from '../components/Header/Header';
import Items from '../components/Items/Items';
import Order from '../components/Order/Order';

const App = () => {
  const [order, setOrder] = useState([]);


  return (
    <div>
      <Header/>
      <div className="container mx-auto mt-4">
        <div className="flex">
          <Order setOrder={order}/>
          <Items/>
        </div>
      </div>
    </div>
  );
};

export default App;