import React from 'react';

const Menu = ({ dishes }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {dishes.map(dish => (
          <li key={dish.id}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>${dish.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
