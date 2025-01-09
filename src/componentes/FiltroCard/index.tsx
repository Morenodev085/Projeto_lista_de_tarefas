import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducer/filtro'
import * as S from'./styles'
import * as enums from '../../util/enums/tarefa'
import { RootReducer } from '../../store'


export type Props = {
    legenda: string
    criterio: 'prioridade' | 'status' | 'todas'
    valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({legenda, criterio, valor}: Props) => {
    const dispatch = useDispatch()
    const {filtro, tarefas} = useSelector((state: RootReducer) => state)

    const verificaEstaAtivo = () => {
        const mesmoCriteirio = filtro.criterio === criterio
        const mesmoValor = filtro.valor === valor

        return mesmoCriteirio && mesmoValor
    }
    const filtrar = () => {
        dispatch(
            alterarFiltro({
                criterio,
                valor
            })
        )
    }


    const contarTarefas = () => {
        if (criterio === 'todas') return tarefas.itens.length
        if (criterio === "prioridade"){
            tarefas.itens.filter(itens => itens.prioridade === valor).length
        }
        if (criterio === 'status'){
            tarefas.itens.filter(itens => itens.status === valor).length
        }
    }

    const contador = contarTarefas()
    const ativo = verificaEstaAtivo()
    return (
        <S.Card ativo={ativo} onClick={filtrar}>
            <S.Contador>{contador}</S.Contador>
            <S.Lable>{legenda}</S.Lable>
        </S.Card>
    )
}

export default FiltroCard
