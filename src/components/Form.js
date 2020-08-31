import React, {useState} from 'react';
import {changeValidation, onSubmitValidation} from '../utils/Validations';
import Message from './Message'
import Select from './Select'

const Form = ({setData, data}) => {

  const [message, setMessage] = useState('');
  const [file, setFile] = useState('');

  const [formData, setFormData] = useState({
    archivo: '',
    titulo: '',
    area: '',
    sede: '',
    n1: '',
    n2: '',
    n3: '',
    año: '',
    fechaVen: '',
    observacion: ''
  })

  const handleChange = (event) => {
    changeValidation(event, formData, setFile, setFormData)
  }

  const onSubmit = (e) =>{
    onSubmitValidation (e, file, data, setData, formData, setMessage, limpiar)
  }

  const limpiar = () => {
    setFormData({
      archivo: '',
      titulo: '',
      area: '',
      sede: '',
      n1: '',
      n2: '',
      n3: '',
      año: '',
      fechaVen: '',
      observacion: ''
    })
    setFile([])
    setTimeout(() => {
      setMessage('')
    }, 2000);
  }

  return (  
    <>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="form-group col-12">
          <h5>Archivo</h5>
          <div  className='form-group custom-file mb-3 '>
            <input
              type='file'
              className='custom-file-input'
              onChange={handleChange}
            />

            <label  className='custom-file-label ' htmlFor='customFile'>
              {formData.archivo}
            </label>

            <small className="form-text text-muted">Solo puedes seleccionar 1 archivo.</small>
              
          </div >
        </div>
        <div className="d-flex flex-wrap">
          <div className="form-group col-6">
            <label forhtml="titulo" className="font-weight-bold">Titulo</label>
            <input type="text" name="titulo" id="titulo" placeholder="Titulo amigable" className="form-control" value={formData.titulo} onChange={handleChange} />
          </div>
          <div className="form-group col-3">
            <label forhtml="area" className="font-weight-bold">Area</label>
            <select className="form-control" name="area" id="area" value={formData.area} onChange={handleChange}>
              <option value="">-- Seleccione --</option>
              <option value="Sistemas">Sistemas</option>
              <option value="Gerencias">Gerencias</option>
              <option value="Contabilidad">Contabilidad</option>
            </select>
          </div>
          <div className="form-group col-3">
            <label forhtml="sede" className="font-weight-bold">Sede</label>
            <select className="form-control" name="sede" id="sede" value={formData.sede} onChange={handleChange}>
              <option value="">-- Seleccione --</option>
              <option value="Bello">Bello</option>
              <option value="Medellin">Medellin</option>
              <option value="Envigado">Envigado</option>
              <option value="Sabaneta">Sabaneta</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="form-group col-4">
            <label forhtml="n1" className="font-weight-bold">N1</label>
            <select className="form-control" name="n1" id="n1" value={formData.n1} onChange={handleChange}>
              <option value="">-- Seleccione --</option>
              <option value="Nivel1">Nivel 1</option>
              <option value="Nivel2">Nivel 2</option>
              <option value="Nivel3">Nivel 3</option>
            </select>
          </div>
          <div className="form-group col-4">
            <label forhtml="n2" className="font-weight-bold">N2</label>
            <select className="form-control" name="n2" id="n2" value={formData.n2} onChange={handleChange}>
              <option value="">-- Seleccione --</option>
                <Select formData={formData} Nivel={2}/>
            </select>
          </div>
          <div className="form-group col-4">
            <label forhtml="n3" className="font-weight-bold">N3</label>
            <select className="form-control" name="n3" id="n3" value={formData.n3} onChange={handleChange}>
              <option value="">-- Seleccione --</option>
                <Select formData={formData} Nivel={3}/>
            </select>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="form-group col-3">
            <label forhtml="año" className="font-weight-bold">Año...</label>
            <input type="number" name="año" id="año" placeholder="1970-2020" className="form-control" value={formData.año} onChange={handleChange} />
          </div>
          <div className="form-group col-4">
            <label forhtml="fechaVen" className="font-weight-bold">Fecha vencimiento</label>
            <input type="date" name="fechaVen" id="fechaVen" className="form-control" value={formData.fechaVen} onChange={handleChange} />
          </div>
          <div className="form-group col-5">
            <label forhtml="observacion" className="font-weight-bold">Observaciones</label>
            <textarea 
              placeholder="Observaciones..."
              className="form-control" 
              value={formData.observacion} onChange={handleChange}
              maxLength="200" style={{resize: 'none'}} 
              name="observacion" id="observacion" rows="3">
            </textarea>
          </div>
        </div>
        <input
          type='submit'
          value='Agregar'
          className='btn btn-primary col-4 m-auto btn-block mt-2'
        />
      </form>
    </>
  );

}
 
export default Form;