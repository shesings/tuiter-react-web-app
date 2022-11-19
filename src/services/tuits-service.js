import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {}

export const findTuits = async () => {              // async tags this function as asynchronous
    const response = await axios.get(TUITS_API);    // send HTTP GET request to TUITS_API
    const tuits = response.data;                    // extract JSON from response from server
    return tuits;                                   // returns tuits
}

export const deleteTuit = async (tuit) => {}

export const updateTuit = async (tuit) => {}