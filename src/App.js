import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

function App() {

  const [data, setData] = useState([])
  const [screen, setScreen] = useState(true)

  useEffect(() => {
    let initialList = JSON.parse(localStorage.getItem('Datos'));
    if(initialList)
      setData(initialList)
  }, [ ])

  useEffect(() => {
    localStorage.setItem('Datos', JSON.stringify(data));
  }, [ data ])

  const handleScreen = () =>{
    setScreen(!screen)
  }

  return (
    <div className="col-md-8 col-sm-10 container border my-4 py-4 shadow">
      <Header screen={screen} handleScreen={handleScreen} />
      {screen ?
        <Form
            setData={setData}
            data={data}
        />
      :
        <List data={data} />
      }
    </div>
  );
}

export default App;
