import React from 'react';
import Card from './Card'
const Details = ({form}) => {

  const URL =`http://localhost:4000/upload/${form.archivo}`
  if(!form) return

  return (  
    <div className="card my-1 col-sm-11 col-md-5 shadow" >
      <div className="card-body">
        
        <h3 className="card-title mb-2">{form.titulo}</h3>
        <div className="d-flex flex-wrap">
          <h5 className="my-auto">Archivo:</h5>
          <a  
            data-toggle="tooltip" data-placement="top" title="Descargar"
            href={URL} 
            className="btn btn-outline-primary mx-1 "  
            download    
          >
            {form.archivo}
          </a>
        </div>

        <Card name={'Area'} value={form.area}/>
        <Card name={'Sede'} value={form.sede}/>
        <Card name={'N1'} value={form.n1}/>
        <Card name={'N2'} value={form.n2}/>
        <Card name={'N3'} value={form.n3}/>
        <Card name={'Año'} value={form.año}/>
        <Card name={'Fecha vencimiento'} value={form.fechaVen}/>

        <h5 className="my-auto border-top mt-1 pt-1">Observaciones:</h5>
        <p className="mb-0 ml-1 mr-3 my-auto">{form.observacion}</p>

      </div>
    </div>
  );
}
 
export default Details;