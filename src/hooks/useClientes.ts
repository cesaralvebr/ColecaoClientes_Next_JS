import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm();

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente);
        exibirTabela()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos();
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }


    return {
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        cliente,
        clientes,
        tabelaVisivel,
        formularioVisivel,
        exibirTabela
    }
}