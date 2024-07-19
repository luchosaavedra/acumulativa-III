import React, { useState } from 'react';
import NotaForm from './NotaForm';


function App() {
  const {title, setTitle}= useState('');
  const submit=(e) =>{
    e.preventDefault();
  }
  return(<App>
        <h1>Post it simulator!</h1>
        <form onSubmit={submit}>
          <input type="text" placeholder='titulo' value={title} onChange={e => setTitle(e.target.value)}/>
          <input type="text" placeholder='descripcion' />
          <input type="checkbox" />
          <label for=''>Important </label>
          <button type='submit'>Agregar</button>
          </form>
      </App>
  )
}
export default App;