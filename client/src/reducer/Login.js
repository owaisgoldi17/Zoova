import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id : "",
    password: "",
    error:"",
    users : [],
    showModal: false
}

const loginSlicer = createSlice({
    name: "login",
    initialState,
    reducers:{
        setId : (state,{payload})=>{
            state.id = payload;
        },
        setPassword : (state,{payload})=>{
            state.password = payload;
        },
        addUser: (state,{payload})=>{
            state.users.push({id:payload.id,password:payload.pwd});
        },
        setError: (state,{payload})=>{
            state.error = payload;
        },
        setShowModal: (state,{payload})=>{
            state.showModal = payload;
        },
        updatePassword: (state,{payload})=>{
            state.users[payload].password = "123456";
        }
    }
})

export const {setId,setPassword,addUser,setError,setShowModal,updatePassword} = loginSlicer.actions;

export default loginSlicer.reducer;