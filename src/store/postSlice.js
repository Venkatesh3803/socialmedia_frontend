import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: false,
}

export const fetchingUsersPost = createAsyncThunk("fetchinguserpost", async ( {userId} ) => {
        const res = await fetch("https://socialmedia-backend-lypj.onrender.com/api/post/timeline/all", {
            method: "get",
            userId: userId
        });
        return await res.json();
    })

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchingUsersPost.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchingUsersPost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        },
        [fetchingUsersPost.pending]: (state, action) => {
            state.error = true
        }
    }
})

export const { } = postSlice.actions

export default postSlice.reducer