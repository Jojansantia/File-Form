import React from 'react';

const Header = ({screen, handleScreen}) => {

  return (  
    <div className="d-flex justify-content-between align-items-center mt-1 mb-2 flex-wrap">
      <h1 className=" text-center text-uppercase">{screen ? 'Formulario' : 'Listado'}</h1>
      <button type="button" onClick={handleScreen} className="btn btn-info">Ir a {!screen ? 'Formulario' : 'Listado'}</button>
    </div>
  );

}
 
export default Header;

