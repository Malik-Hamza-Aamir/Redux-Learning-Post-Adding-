import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
import postReducer from "../Features/posts/postSlice";
import usersReducer from "../Features/users/usersSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        users: usersReducer,
    }
});