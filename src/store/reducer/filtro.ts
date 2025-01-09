import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../util/enums/tarefa'

type filtroState = {
    termo?: string
    criterio: 'prioridade' | 'status' | 'todas'
    valor?: enums.Prioridade | enums.Status
}

const initialState: filtroState = {
    termo: '',
    criterio: 'todas',
}

const filtroSlice = createSlice({
    name: "filtro",
    initialState,
    reducers: {
        alterarTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        },
        alterarFiltro: (state, action: PayloadAction<filtroState>) => {  // Correção aqui
            state.criterio = action.payload.criterio
            state.valor = action.payload.valor
        }
    }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions  // Correção aqui

export default filtroSlice.reducer
