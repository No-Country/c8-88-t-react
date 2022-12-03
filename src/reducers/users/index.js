import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    fullName: "",
    password: "",
    isAuthenticated: false,
    user: null

}

const initialStateOrder = {
    origen: "",
    destino: "",
    inicio: "",
    final: "",
    alto: "",
    largo: "",
    ancho: "",
    peso: "",
    objeto: "",
    travel: "",
    oferta: "",
    seguro: "",
    comentarios: "",
    img:"",
    cel:""
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.password = action.payload.password;
            state.isAuthenticated = true
            state.user = state.user
        },
        unsetUser: (state) => {
            state.email = ""
            state.fullName = ""
            state.password = ""
            state.user = null;
            state.isAuthenticated = false
        }
    }
})

const orderSlice = createSlice({
    name: "user",
    initialState: initialStateOrder,
    reducers: {
        addHome: (state, action) => {
            state.origen = action.payload.origen;
            state.destino = action.payload.destino;
            state.inicio = action.payload.inicio;
            state.final = action.payload.final;
        },
        addEnvios: (state, action) => {
            state.alto = action.payload.alto;
            state.largo = action.payload.largo;
            state.ancho = action.payload.ancho;
            state.peso = action.payload.peso;
            state.objeto = action.payload.objeto;
        },
        addTravel: (state, action) => {
            state.travel = action.payload.travel;
            state.cel = action.payload.cel;
            state.img = action.payload.img;
        },
        addOfert: (state, action) => {
            state.seguro = action.payload.seguro;
            state.comentarios = action.payload.comentarios;
            state.oferta = action.payload.oferta;
        }
    }
});

export const selectUser = (state) => state.user.isAuthenticated
export const { addUser, unsetUser } = userSlice.actions;
export const { addHome, addEnvios, addTravel, addOfert } = orderSlice.actions;

const reducer = combineReducers({
    user: userSlice.reducer,
    order: orderSlice.reducer
});

export default reducer


