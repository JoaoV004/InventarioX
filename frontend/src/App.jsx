import { useState } from 'react'
import './App.css'
import CadastrarProduto from './components/cadastrarProduto'
import MostrarProdutos from './components/MostrarProdutos'

function App() {
  

  return (
    <>
      {/* <CadastrarProduto /> */}
      <hr />
      
      <div>
        <MostrarProdutos />

      </div>
    </>
  )
}

export default App
