import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Photo } from "../types/photo";

type PhotosState = {
    list: Photo[];
};

const initialState: PhotosState = {
    list: []
};

const { actions, reducer } = createSlice({
    name: "photos",
    initialState,
    reducers: {
        addPhotos: (state, { payload }: PayloadAction<Photo[]>) => {
            state.list = payload;
        }
    }
});

export const { addPhotos } = actions;
export const photosReducer = reducer;
