import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialName ={name:''}

const nameSlice = createSlice({
    name:'nameSlice',
    initialState: initialName,
    reducers:{
        getName(state, action){
            return { ...state, name: action.payload.n }
        },
        //  getName(state, action) { or we can do it this way
        //     state.name = action.payload.n
        //     return state
        // }
        getReset(){
            return initialName
        }
        // getReset(state){
        //     state = initialName
        //     return state
        // }
    }
}) 


const store = configureStore({reducer:nameSlice.reducer})
export const nameActions = nameSlice.actions

export default store