import React, { useRef, useState } from 'react';

function Header() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const importantRef = useRef();

  const [mensaje, setMensaje] = useState('');
  const [notas, setNotas] = useState([]);

  function Submit(e) {
    console.log('Se hizo submit');
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const important = importantRef.current.checked;
    
    if (title.trim() === '') {
      setMensaje('Campos vacios');

      setTimeout(() => {
          setMensaje('');
      }, 3000);

      return
    }
    if(description.trim() === ''){
      setMensaje('Campos vacios');

      setTimeout(() => {
          setMensaje('');
      }, 3000);

      return
    }

    const nuevaNota = {
      title: title, 
      description: description, 
      important: important 
    };

    setNotas([...notas, nuevaNota]);
    alert('Nota registrada correctamente')

    titleRef.current.value = '';
    descriptionRef.current.value = '';
    importantRef.current.checked = false;
  };
  
  console.log(notas);

  return (
    <div>
      <h1>Post It Simulator!</h1>
      <form onSubmit={Submit}>
        <input type="text" placeholder="Titulo" ref={titleRef}/>
        <input type="text" placeholder="Descripcion" ref={descriptionRef}/>
        <input type="checkbox" ref={importantRef}/>
        <label>Important</label>
        <button type="submit">Agregar</button>
      </form>
      {/* Mensaje de campo vacio */}
      <div role="alert" hidden={!mensaje}>
        {mensaje}
      </div>
    </div>
  );
};

export default Header;