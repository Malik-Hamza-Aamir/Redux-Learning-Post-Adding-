import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Hamza Aamir'},
    {id: '1', name: 'Ali Aamir'},
    {id: '2', name: 'Aliza Hamza'},
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;