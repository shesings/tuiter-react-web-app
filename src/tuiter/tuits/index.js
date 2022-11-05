import React from "react";
// import posts from './posts.json';

import TuitItem from "./tuit-item.js";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuitArray = useSelector((state) => state.tuits);
    return(
        <ul className="list-group">
            {
                tuitArray.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default TuitsList;