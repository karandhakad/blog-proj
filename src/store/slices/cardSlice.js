import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

let result = await axios.get("https://jsonplaceholder.typicode.com/posts").then((result)=>{
        return result.data
})

const initialState = {
    cardsList: result
}

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers: {
        crossCard: (state, action) => {
            const { id } = action.payload;
            state.cardsList = state.cardsList.filter((card) => {
                return card.id != id;
              });
        },
    }
})

export const {crossCard} = dataSlice.actions;

export default dataSlice.reducer;