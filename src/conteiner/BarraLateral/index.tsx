import { useDispatch, useSelector } from "react-redux"
import FiltroCard from "../../componentes/FiltroCard"
import { RootReducer } from "../../store"
import { alterarTermo } from "../../store/reducer/filtro"

import * as S from './styled'
import * as enums from '../../util/enums/tarefa'
import { Campo } from "../../styles"


const BarraLateral = () => {
    const dispatch = useDispatch()
    const {termo} = useSelector((state: RootReducer) => state.filtro)


    return(
            <S.Aside>
                <div>
                    <Campo
                    type="text"
                    placeholder="Buscar"
                    value={termo}
                    onChange={(evento) => dispatch(alterarTermo(evento.target.value))
                    }
                    />
                <S.Filtros>
                    <FiltroCard valor={enums.Status.PENDENTE} criterio="status" legenda="pendentes"  />
                    <FiltroCard valor={enums.Status.CONCLUIDA} criterio="status" legenda="concluidas"  />
                    <FiltroCard valor={enums.Prioridade.URGENTE} criterio="prioridade" legenda="urgentes"  />
                    <FiltroCard valor={enums.Prioridade.URGENTE} criterio="prioridade" legenda="importantes"  />
                    <FiltroCard valor={enums.Prioridade.NORMAL}criterio="prioridade" legenda="normal" />
                    <FiltroCard criterio="todas" legenda="todas"  />
                </S.Filtros>
                </div>
            </S.Aside>
        )

}

export default BarraLateral
