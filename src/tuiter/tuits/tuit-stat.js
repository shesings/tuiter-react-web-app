import React from "react";
import "./TuitStat.css";

const TuitStat = (
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
    return (
        <div className="text-center wd-post-actions-container">
            <span
                className="stat card-text fa fa-comment wd-post-info wd-post-trendline wd-post-action">
                <i className="bi bi-chat"></i>
                {tuit.replies}
            </span>
            <span className="stat card-text wd-post-info wd-post-trendline wd-post-action">
                <i className="bi bi-repeat"></i>
                {tuit.retuits}
                </span>
            <span className="stat card-text wd-post-info wd-post-trendline wd-post-action">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${tuit.liked ? 'red' : 'lightgrey'}`} class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                {tuit.likes}
            </span>
            <span className="card-text wd-post-info wd-post-trendline wd-post-action">
                <i className="bi bi-share"></i>
            </span>
        </div>
    );
};
export default TuitStat;