import { useSelector } from "react-redux"
import Tarefa from "../../componentes/Tarefa"
import { MainContainer, Titulo } from "../../styles"
import { RootReducer } from "../../store"

const ListaDeTarefas = () => {
    const { itens } = useSelector((state: RootReducer) => state.tarefas)
    const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)

    // Função para filtrar tarefas
    const filtrarTarefa = () => {
        let tarefasFiltradas = itens

        if (termo && termo.length > 0) { // Verificando se o termo existe
            tarefasFiltradas = tarefasFiltradas.filter((item) =>
                item.titulo.toLowerCase().includes(termo.toLowerCase()) // Corrigido para includes
            )
        }

        if (criterio === 'prioridade' && valor) {
            tarefasFiltradas = tarefasFiltradas.filter((item) => item.prioridade === valor)
        } else if (criterio === 'status' && valor) {
            tarefasFiltradas = tarefasFiltradas.filter((item) => item.status === valor)
        }

        return tarefasFiltradas
    }

    // Função para gerar mensagem de resultados
    const exibirResultadoFiltrage = (quantidade: number) => {
        let mensagem = ''
        const complementacao = termo && termo.length > 0 ? `e "${termo}"` : ''

        if (criterio === 'todas') {
            mensagem = `${quantidade} tarefa(s) encontrada(s) como: "todas" ${complementacao}`
        } else {
            mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${criterio}=${valor}" ${complementacao}`
        }
        return mensagem
    }

    const tarefas = filtrarTarefa() // Aplica o filtro nas tarefas
    const mensagem = exibirResultadoFiltrage(tarefas.length) // Gera a mensagem de exibição

    return (
        <MainContainer>
            <Titulo as="p">{mensagem}</Titulo >
            <ul>
                {tarefas.map((t) => (
                    <li key={t.id}> {/* Usando id como chave única */}
                        <Tarefa
                            id={t.id}
                            titulo={t.titulo}
                            descricao={t.descricao}
                            status={t.status}
                            prioridade={t.prioridade}
                        />
                    </li>
                ))}
            </ul>
        </MainContainer>
    )
}

export default ListaDeTarefas
