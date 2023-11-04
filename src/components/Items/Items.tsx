import React from 'react';
import {ITEMS} from '../../constanst/constanst.ts';
import Item from '../Item/Item.tsx';

interface Props {
  onAdd: (item: Items) => void;
}

const Items: React.FC<Props> = ({onAdd}) => {
  return (
    <div className="grid grid-cols-2 gap-2 col-span-2 border border-black rounded p-2">
      {
        ITEMS.map((item , index)=> {
          return <Item key={index} item={item} onAdd={onAdd}/>;
        })
      }
    </div>
  );
};

export default Items;