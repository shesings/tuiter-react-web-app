import React from "react";
import TuitStat from "./tuit-stat.js";
// TODO: need to update so that the "avatarIcon" is image for the code
const TuitItem = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "avatarIcon": "../../images/space-x-logo.jpeg",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "space-x-logo.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return(
        <div className="card wd-card">
            <div className="card-body">
                <div className="wd-user-post">
                    <img src={tuit.avatarIcon} className="wd-user-image me-xxl-3 me-xl-2 me-lg-0" alt="Avatar Icon"/>
                    <div className="ms-2 me-auto ms-lg-0">
                        <div>
                            <span className="fw-bold">{tuit.userName}</span>
                            <span className="card-text fa fa-check-circle wd-title-inline-items"></span>
                            {tuit.handle}
                            <span className="card-text wd-post-info wd-title-inline-items"> - {tuit.time}</span>
                        </div>
                        <p className="card-text wd-user-tuit">{tuit.tuit}</p>
                    </div>
                </div>
                <TuitStat/>
                <div className="wd-float-done"></div>

            </div>
        </div>
    );
};
export default TuitItem;