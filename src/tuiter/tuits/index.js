import React, {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuits-thunks.js";

import TuitItem from "./tuit-item.js";
import {useSelector, useDispatch} from "react-redux";

const TuitsList = () => {
    const {tuits, loading} = useSelector((state) => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            { !loading &&
                tuits.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default TuitsList;