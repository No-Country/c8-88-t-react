import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    email: "",
    fullName: "",
    password: ""

}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.password = action.payload.password;
        },
        unsetUser: (state) => {
            state.email = ""
            state.fullName = ""
            state.password = ""
        }


    }

})

export const {setUser, unsetUser} = userSlice.actions;
export default userSlice.reducer;

