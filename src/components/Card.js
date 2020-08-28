import React from 'react';

const Card = ({name, value}) => {

  return (  
    <div className="d-flex flex-wrap ">
      <h5 className="my-auto">{name}:</h5>
      <p className="mb-0 ml-1 mr-3 my-auto">{value}</p>
    </div>
  );

}
 
export default Card;