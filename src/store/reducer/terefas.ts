import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";

import * as emuns from "../../util/enums/tarefa"


type TarefaState = {
    itens: Tarefa[]
}

const initialState: TarefaState ={
    itens: [
        {
            id: 1,
            descricao: 'estudarJava, para a aula ',
            prioridade: emuns.Prioridade.IMPORTANTE,
            status: emuns.Status.PENDENTE,
            titulo: 'Estudar javaScrpt'
        },
        {
            id: 2,
            descricao: 'estudar css, para a aula ',
            prioridade: emuns.Prioridade.URGENTE,
            status: emuns.Status.PENDENTE,
            titulo: 'Estudar Tipescrip'
        },
        {
            id: 3,
            descricao: 'estudar angula, para a aula ',
            prioridade: emuns.Prioridade.NORMAL,
            status: emuns.Status.PENDENTE,
            titulo: 'Estudar Angular'
        },
    ]
}

    const tarefasSlice = createSlice({
        name: 'tarefas',
        initialState,
        reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload);
        },
        editar: (state, action: PayloadAction<Tarefa>) => {
            const indexDaTarefa = state.itens.findIndex(tarefa => tarefa.id === action.payload.id);
            if (indexDaTarefa >= 0) {
            state.itens[indexDaTarefa] = action.payload;
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
            const tarefaJaExiste = state.itens.find(
                (tarefa) =>
                    tarefa.titulo.toLocaleLowerCase() === action.payload.titulo.toLocaleLowerCase()
            )
            if (tarefaJaExiste){
                alert('Já existe uma tarefa com esse nome')
            } else {
                const ultimaTarefa = state.itens[state.itens.length - 1]
                const tarefaNova ={
                    ...action.payload,
                    id: ultimaTarefa ? ultimaTarefa.id = 1 : 1
                }
                state.itens.push(tarefaNova)
            }
        },
        alteraStatus: (state, action: PayloadAction<{id: number; finalizado: boolean}>) => {
            const indexDaTarefa = state.itens.findIndex(
                (t) => t.id === action.payload.id
            );

            if (indexDaTarefa >= 0){
                state.itens[indexDaTarefa].status = action.payload.finalizado
                    ? emuns.Status.CONCLUIDA
                    : emuns.Status.PENDENTE
        }
        }
    }
});


export const {remover, editar, cadastrar, alteraStatus} = tarefasSlice.actions

export default tarefasSlice.reducer
