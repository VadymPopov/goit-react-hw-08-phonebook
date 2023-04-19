import { createSlice } from "@reduxjs/toolkit";
import {logIn, register, logOut, refreshUser} from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {name: null, email: null},
        token: null,
        isLoggedIn: false,
        isRefreshing: false
    },
    extraReducers: (builder) => builder.addCase(register.fulfilled, (state, action)=>{
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn= true;
    }).addCase(register.pending, (state, action)=>{
        return state;
    }).addCase(register.rejected, (state, action)=>{
        return state;
    }).addCase(logIn.fulfilled, (state, action)=>{
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn= true;
   }).addCase(logOut.fulfilled, (state, action)=>{
    state.user = {name: null, email:null};
    state.token = null;
    state.isLoggedIn= false;
}).addCase(refreshUser.pending, (state,action) =>{
    state.isRefreshing = true;
}).addCase(refreshUser.fulfilled, (state,action) =>{
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}).addCase(refreshUser.rejected, (state,action) =>{
    state.isRefreshing = false;
})
});

export const authReducer = authSlice.reducer;