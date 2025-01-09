import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";
import { Button } from "../componentes/Tarefa/styles";

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif
    }
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 244px auto;
`

export const MainContainer = styled.main`
    padding: 0 40px;
    height: 100vh;
    overflow-y: scroll;
`
export const Titulo = styled.h2`
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: bold;
`

export const Campo = styled.input`
    border-radius: 8px;
    background-color: #fff;
    padding: 8px;
    font-weight: bold;
    color: #666666;
    border-color: #666666;
    width: 100%;
`

export const BotaoSalvar = styled(Button)`
    background-color: ${variaveis.verde} ;
`

export default EstiloGlobal
