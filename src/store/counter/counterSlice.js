import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};


export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (payload) => {
        console.log(payload.val1 + payload.val2);
        console.log("Request recieved, will be processsed shortly");
        const waitTime = await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log("Your request has been processed");
        return payload;
    }
)

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload.val1;
        })
    }
})


export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;