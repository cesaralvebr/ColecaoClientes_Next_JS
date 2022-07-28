import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import { useEffect } from 'react';
import useClientes from '../hooks/useClientes';

export default function Home() {

  const {
    novoCliente,
    excluirCliente,
    salvarCliente,
    selecionarCliente,
    obterTodos,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela
     } = useClientes();

    useEffect(() => {
      obterTodos();
  }, [])

  return (
    <div className={`flex justify-center
     items-center h-screen bg-gradient-to-t to-blue-600 from-purple-500
     text-white`}>
      <Layout titulo="Cadastro simples">
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao className='mb-4' onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}>
            </Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => exibirTabela} />
        )}
      </Layout>
    </div>
  )
}
