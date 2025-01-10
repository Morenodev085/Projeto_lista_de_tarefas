import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { BotaoSalvar, MainContainer, Titulo } from "../../styles"
import { Campo } from "../../styles"
import {Form, Opcoes, Opcao} from "./styles"
import * as enums from "../../util/enums/tarefa"
import { cadastrar } from "../../store/reducer/terefas"


const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

    const cadastrarTarefa = (evento: FormEvent) => {
        evento.preventDefault();
        dispatch(cadastrar({
            titulo,
            prioridade,
            status: enums.Status.PENDENTE,
            descricao,
        }));
        navigate('/');
    }

    return (
        <MainContainer>
    <Titulo>Nova Tarefa</Titulo>
        <Form onSubmit={cadastrarTarefa}>
            <Campo value={titulo} onChange={(evento) => setTitulo(evento.target.value)} type="text"  placeholder="Titulo"/>
            <Campo value={descricao} onChange={(evento) => setDescricao(evento.target.value)} as="textarea" placeholder="Descrição da tarefa"/>
    <Opcoes>
        <p>Prioridade</p>
        {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
                <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) => setPrioridade(evento.target.value as enums.Prioridade)}
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />{''}
                <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
        ))}
    </Opcoes>
            <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
    </MainContainer>
    )
}

export default Formulario
