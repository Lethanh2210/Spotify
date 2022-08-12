import { createSlice } from '@reduxjs/toolkit'



const initialState = [];

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        value: []
    },
    reducers: {
        saveValue: (state, action) => {
            state.value = action.payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { saveValue } = cardSlice.actions

export default cardSlice.reducer