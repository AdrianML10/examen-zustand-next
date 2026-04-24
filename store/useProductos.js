import { persist } from "zustand/middleware";
import {create} from "zustand"
export const useProductos = create(persist(set =>({
    productos: [],
    guardarProductos: (producto) => set(state =>({
        productos: [...state.productos,producto]
    }))
})
))