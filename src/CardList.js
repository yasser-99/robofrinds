import React from 'react';
import Card from './Card';

const CardList =({robots}) => {
  return (
    <div>

      { //==> this is a javascript code to create a list of cards like:
        //==> <Card id=robots[i].id name = .../>
        robots.map( (user, i) =>{ // creating cards using map loop
          return (
              <Card
                  key={i}
                  id={robots[i].id}
                  name={robots[i].name}
                  email={robots[i].email}
              />
          ); // end of each iteration
        }) // the end of map loop
      }
    </div>
  );
}
export default CardList;
