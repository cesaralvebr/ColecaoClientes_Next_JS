import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Titulo from "../components/Titulo";
import Layout from '../components/Layout';
import Cliente from '../core/Cliente';
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import { useState } from 'react';

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Cesar', 24, '2'),
    new Cliente('Maria', 20, '3'),
    new Cliente('João', 63, '4'),
    new Cliente('Fernada', 41, '5'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel("form")
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }
  const [cliente, setCliente] = useState(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  function novoCliente() {
    setVisivel('form')
    setCliente(Cliente.vazio())

  } 

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }
  return (
    <div className={`flex justify-center
     items-center h-screen bg-gradient-to-t to-blue-600 from-purple-500
     text-white`}>
      <Layout titulo="Cadastro simples">
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao className='mb-4' onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}>
            </Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}
