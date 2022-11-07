import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

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
    initialState: tuits,
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
