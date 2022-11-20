import {createAsyncThunk} from "@reduxjs/toolkit"               // import createAsyncTrunk
import * as service from "./tuits-service.js"                      // import all exported functions as service

export const findTuitsThunk = createAsyncThunk(                 // create thunk for findTuits
    'tuits/findTuits', async () =>       // give unique name, thunk invokes
    await service.findTuits()                                   // service function. Returned data goes in
)                                                               // redux action's payload

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',                               // unique thunk identifier
    async (tuitId) => {                     // wraps
        await service.deleteTuit(tuitId)                       // service method
        return tuitId                                          // return tuit ID so we can remove tuit
    })                                                         // from reducer's store

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async(thunkAPI) =>
        await service.createTuit(thunkAPI)
);

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
        await service.updateTuit(tuit)
)
