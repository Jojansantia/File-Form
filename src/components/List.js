import React from 'react';
import Details from './Details'

const List = ({data, handleDelete}) => {

  return (  
    <div className="d-flex flex-wrap justify-content-around">
      {data.length !== 0 ?
        data.map((form, index) => (
          <Details key={index} form={form} handleDelete={handleDelete} />
        ))
      :
        <h3 className="text-center my-2">-- No hay información -- </h3>
      }
    </div>
  );

}
 
export default List;