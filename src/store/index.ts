import {configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducer/terefas'
import filtroReducer from './reducer/filtro'

const store = configureStore({
    reducer: {
        tarefas: tarefasReducer,
        filtro: filtroReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
