import styled from "styled-components";
import variaveis from "../../styles/variaveis";

import * as enums from "../../util/enums/tarefa"


type TagProps = {
    prioridade?: enums.Prioridade
    status?: enums.Status
    parametros: 'status' | 'prioridade'
}

function retornaCorDeFundo (props: TagProps): string{
    if(props.parametros === 'prioridade'){
        if (props.prioridade === enums.Prioridade.IMPORTANTE) return variaveis.amarelo2
        if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    }else {
        if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
        if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
        }
        return '#ccc'
}

export const Card = styled.div`
    background-color: #FCFCFC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 16px;
    margin-bottom: 32px;
    border-radius: 16px;

`
export const Titulo = styled.h3`
    font-weight: bold;
    font-size: 18px;
`
export const Tag = styled.span<TagProps>`
    padding: 4px 8px;
    font-size: 10;
    font-weight: bold;
    color: #fff;
    background-color:${(props) =>retornaCorDeFundo(props)};
    border-radius: 8px;
    margin-right: 16px;
    display: inline-block;
`
export const Descricao = styled.textarea`
    color: #8b8b8b;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Roboto Mono', monospace;
    display: block;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
    resize: none;
    border: none;
    background-color: transparent;
`
export const BarraAcoes =  styled.div`
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 16px;
`
export const Button = styled.button`
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    padding:8px 12px;
    border: none;
    cursor: pointer;
    background-color: #2F3640;
    border-radius: 8px;
    margin-right: 8px;
`


// export const BotaoCancelar = styled(Button)`
//     background-color: ${variaveis.verde} ;
// `
export const BotaoRemover = styled(Button)`
    background-color: ${variaveis.vermelho} ;
`