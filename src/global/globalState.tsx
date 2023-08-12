import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dailyState: "" || null,
    toggle: false
}

const globalState = createSlice({
    name: "state",
    initialState,
    reducers: {
        user: (state, { payload }) => {
            state.dailyState = payload
        },

        logOut: (state) => {
            state.dailyState = null
        },

        onToggle: (state, { payload }) => {
            state.toggle = payload
        },
    }
});

export const { logOut, user, onToggle } = globalState.actions

export default globalState.reducer