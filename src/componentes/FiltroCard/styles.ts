import styled from "styled-components";


type Props = {
    ativo: boolean
}

export const Card = styled.div<Props>`
    padding: 8px;
    border: 1px solid ${(props) => (props.ativo ? '#1E90ff' : '#a1a1a1' )};
    border-radius: 8px;
    background-color:${(props) => (props.ativo ? '#ffff' : '#FCFCFC' )};
    color:${(props) => (props.ativo ? '#1E90ff' : '#5e5e5e' )};
    cursor: pointer;
`

export const Contador = styled.span`
    font-weight: bold;
    font-size: 24px;
    display: block;
`

export const Lable = styled.span`
    font-size: 14px;
`
