import React from 'react';

const Card = ({name, id, email}) => {
  return(
    <div className='tc f5 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={`https://robohash.org/${id}?size=150x150`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default  Card
