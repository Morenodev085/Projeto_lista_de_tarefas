import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import { Botao, BotaoSalvar,} from '../../styles';
import * as enums from '../../util/enums/tarefa'



import {remover, editar, alteraStatus} from '../../store/reducer/terefas'
import TarefaClasse from '../../models/Tarefa';

type Props = TarefaClasse

const Tarefa = ({descricao: descriOriginal, prioridade, status, titulo, id}: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    const [descricao,setDescricao] = useState('')

    useEffect(() => {
        if(descriOriginal.length > 0){
        }
    }, [descriOriginal])

    function CancelarEdicao() {
        setEstaEditando(false)
        setDescricao(descriOriginal)
    }

    function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>){
        dispatch(
            alteraStatus({
                id,
                finalizado: evento.target.checked
        }))
    }

    return (
    <S.Card>
        <label htmlFor={titulo}>
            <input type="checkbox" id={titulo} checked={status === enums.Status.CONCLUIDA} onChange={alteraStatusTarefa} />
            <S.Titulo>
                {estaEditando && <em>Editando...</em>}
                {titulo}</S.Titulo>
        </label>
        <S.Tag parametros='status' status={status}>{status}</S.Tag>
        <S.Tag parametros='prioridade' prioridade={prioridade}>{prioridade}</S.Tag>
        <S.Descricao value={descricao} onChange={e => setDescricao(e.target.value)} disabled={!estaEditando}>Loren</S.Descricao>
        <S.BarraAcoes>
            {estaEditando? (
                <>
                <BotaoSalvar onClick={() => dispatch(editar({
                    descricao,
                    id,
                    prioridade,
                    status,
                    titulo
                }),
                setEstaEditando(false)
            )}>Salvar</BotaoSalvar>
                <S.BotaoRemover onClick={CancelarEdicao}>
                    Cancelar</S.BotaoRemover>
                </>
            ) : (
                <>
                <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                <S.BotaoRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoRemover>
                </>
            )}
        </S.BarraAcoes>
    </S.Card>
    );
}

export default Tarefa;
