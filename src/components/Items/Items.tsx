import React from 'react';
import {ITEMS} from '../../constanst/constanst.ts';

const Items: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {
        ITEMS.map((item , index)=> {
          return (
            <div key={index} className="flex items-center border rounded">
              <img className="max-w-full w-[200px] h-auto" src={item.image} alt="itemImage"/>
              <div className="pl-3.5">
                <h4>{item.name}</h4>
                <p>Price: {item.price} KGS</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Items;