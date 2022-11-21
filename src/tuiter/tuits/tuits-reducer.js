import { createSlice } from "@reduxjs/toolkit";
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks.js";

const initialState = {
    tuits: [],
    loading: false
}

const mockCurrentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../images/nasa-logo.png",
   };
   
   const templateTuit = {
    ...mockCurrentUser,
    "avatarIcon": "../../images/nasa-logo.png",
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
   }
   

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteTuitThunk.fulfilled] :                   // handle successful response
            (state, { payload }) => {                   // server response successful
                state.loading = false                   // payload from action contains tuit ID to remove
                state.tuits = state.tuits               // turn off loading flag
                    .filter(t => t._id !== payload)     // filter out tuit whose ID matches tuit to remove
            },                                          // we're ignoring pending and rejected thunks
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
            state.loading = false
            const tuitNdx = state.tuits
                .findIndex((t) => t._id === payload._id)
            state.tuits[tuitNdx] = {
                ...state.tuits[tuitNdx],
                ...payload
            }
        },
    },
    reducers: {
        createTuit: (state, action) => {
            console.log({templateTuit});
            console.log(action.payload);
            const stateToPrepend = {
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            }
            state.tuits.unshift(stateToPrepend); // add new state to start of array
        },
        deleteTuit: (state, action) => {
          const index = state.tuits
            .findIndex(tuit =>
               tuit._id === action.payload);

            state.tuits.splice(index, 1);
        }
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;

export default tuitsSlice.reducer;
