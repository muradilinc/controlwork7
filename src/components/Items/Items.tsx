import React from 'react';
import {ITEMS} from '../../constanst/constanst.ts';

interface Props {
  onAdd: (item: Items) => void;
}

const Items: React.FC<Props> = ({onAdd}) => {
  return (
    <div className="grid grid-cols-2 gap-2 col-span-2">
      {
        ITEMS.map((item , index)=> {
          return (
            <div key={index} onClick={() => onAdd(item)} className="flex items-center border rounded">
              <img className="max-w-full w-[180px] h-[155px]" src={item.image} alt="itemImage"/>
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