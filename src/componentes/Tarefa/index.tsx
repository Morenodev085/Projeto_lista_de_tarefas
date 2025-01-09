import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import { BotaoSalvar } from '../../styles';



import {remover, editar} from '../../store/reducer/terefas'
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

    return (
    <S.Card>
        <S.Titulo>{titulo}</S.Titulo>
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
                <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
                <S.BotaoRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoRemover>
                </>
            )}
        </S.BarraAcoes>
    </S.Card>
    );
}

export default Tarefa;
