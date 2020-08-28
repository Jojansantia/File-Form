import React from 'react';

const Select = ({formData, Nivel}) => {

  let palabra1, palabra2 = ''

  const nvl1 = ["Nivel1", "Nivel2", "Nivel3"]
  const nvl2 = ["Informe", "Reporte", "Dato", "Premisa", "Justificacion", "Encuesta"]
  const nvl3 = ["Declaracion", "Justificacion", "Registro", "Escalabilidad", 
                "Exponencial", "Extra", "Infografia", "Biografia", 
                "Bibliografia", "Gestion", "Estadistica", "Recopilacion" ]

  if(Nivel === 2){
    let palabra = nvl1.findIndex(nivel => nivel === formData.n1 )
    if(palabra !== -1){
      palabra1 = nvl2[palabra*2]
      palabra2 = nvl2[(palabra*2)+1]
    }
  }else if(Nivel === 3){
    let palabra = nvl2.findIndex(nivel => nivel === formData.n2 )
    if(palabra !== -1){
      palabra1 = nvl3[palabra*2]
      palabra2 = nvl3[(palabra*2)+1]
    }
  }

  return (  
    <>
      {(formData.n1.trim() !== '' && Nivel === 2) &&
        <>
          <option value={palabra1}>{palabra1}</option>
          <option value={palabra2}>{palabra2}</option>
        </>
      }
      {(formData.n2.trim() !== '' && Nivel === 3) &&
        <>
          <option value={palabra1}>{palabra1}</option>
          <option value={palabra2}>{palabra2}</option>
        </>
      }
    </>
  );
}
 
export default Select;