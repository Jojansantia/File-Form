import clienteAxios from '../config/axios';

export function changeValidation(event, formData, setFile, setFormData) {
  let nam = event.target.name;
  let val = event.target.value;

  if(nam === "n1"){
    setFormData({...formData, [nam]:val, n2:'', n3: ''})
  }else if(nam === "n2"){
    setFormData({...formData, [nam]:val, n3: ''})
  }else if (nam === "año") {
    let newval = parseInt(val)
    if (val !== "" && !Number(val)) {
      return;
    }
    setFormData({...formData, [nam]:newval})
  }else if(event.target.files){
    let _archivo = event.target.files[0]
    setFile(_archivo);
    setFormData({...formData, archivo:_archivo.name})
  }else{
    setFormData({...formData, [nam]:val})
  }
}

export async function onSubmitValidation(e, file, data, setData, formData, setMessage, limpiar) {
  e.preventDefault();

  let error = formValidation(formData, setMessage)
  if(error) return;

  let newFormData = new FormData();
  newFormData.append('myFile', file);
  try {
    const res = await clienteAxios.post('/uploadfile', newFormData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    console.log(res);
    
  } catch (err) {
    if (err.response.status === 500) {
      setMessage('There was a problem with the server');
    } else {
      setMessage(err.response.data.msg);
    }
  }
  setMessage('Los datos se han guardado correctamente.');
  setData([...data, formData])
  limpiar()
};

function formValidation(formData, setMessage) {
  
    if(formData.archivo.trim()  === '' ){
      setMessage('Seleccione un archivo.');
      return true;
    }
    if(formData.titulo.trim()  === '' ){
      setMessage('El titulo es obligatorio.');
      return true;
    }
    if(formData.area.trim()  === '' ){
      setMessage('El area es obligatoria.');
      return true;
    }
    if(formData.sede.trim()  === '' ){
      setMessage('La sede es obligatoria.');
      return true;
    }
    if(formData.n1.trim()  === '' ){
      setMessage('N1 es obligatoria.');
      return true;
    }
    if(formData.n2.trim()  === '' ){
      setMessage('N2 es obligatoria.');
      return true;
    }
    if(formData.n3.trim()  === '' ){
      setMessage('N3 es obligatoria.');
      return true;
    }
    if(formData.fechaVen.trim()  === '' ){
      setMessage('La fecha de vencimiento es obligatoria.');
      return true;
    }
    if(formData.observacion.trim()  === '' ){
      setMessage('Debe añadir una observacion.');
      return true;
    }
    if(formData.año < 1970 || formData.año > 2020 ){
      setMessage('El año no se encuentra entre el rango requerido.');
      return true;
    }

}
