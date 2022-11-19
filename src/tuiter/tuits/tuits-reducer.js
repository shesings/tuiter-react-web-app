import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk} from "../../services/tuits-thunks.js";

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
            }
    },
    reducers: {
        createTuit: (state, action) => {
            const stateToPrepend = {
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            }
            state.unshift(stateToPrepend); // add new state to start of array
        },
        deleteTuit: (state, action) => {
          const index = state
            .findIndex(tuit =>
               tuit._id === action.payload);

            state.splice(index, 1);
        }
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;

export default tuitsSlice.reducer;
