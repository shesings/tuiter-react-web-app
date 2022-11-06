import React from "react";

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
                className="card-text fa fa-comment wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                {tuit.comments}
            </span>
            <span className="card-text wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                <i className="fa fa-retweet" aria-hidden="true"></i> {tuit.retuits}
            </span>
            <span className="card-text wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                <i className="far fa-heart"></i> {tuit.likes}
            </span>
            <span className="card-text wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                <i className="fa fa-upload" aria-hidden="true"></i>
            </span>
        </div>
    );
};
export default TuitStat;