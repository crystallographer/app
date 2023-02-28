import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../types/user";

type UsersState = {
    list: User[];
};

const initialState: UsersState = {
    list: []
};

const { actions, reducer } = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers: (state, { payload }: PayloadAction<User[]>) => {
            state.list = payload;
        }
    }
});

export const { addUsers } = actions;
export const usersReducer = reducer;
