import React from 'react';

interface Props {
  item: Items;
  onAdd: (item: Items) => void;
}

const Item: React.FC<Props> = ({item, onAdd}) => {
  return (
    <div onClick={() => onAdd(item)} className="flex items-center border rounded">
      <img className="max-w-full w-[180px] h-[155px]" src={item.image} alt="itemImage"/>
      <div className="pl-3.5">
        <h4>{item.name}</h4>
        <p>Price: {item.price} KGS</p>
      </div>
    </div>
  );
};

export default Item;