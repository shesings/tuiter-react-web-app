import React from "react";
// import NavigationSidebar from "../navigation-sidebar/index.js";
// import PostSummaryList from "../post-summary-list/index.js";
// import PostList from "../post-list/index.js";
// import WhoToFollowList from "../who-to-follow-list/index.js";
import WhatsHappening from "./whats-happening.js";
import TuitsList from "../tuits/tuit-list.js";

import "./index.css";

const HomeComponent = () => {
    return( <>
    
            <div className="row mt-2">
                <WhatsHappening/>
                <div className="col-10 col-lg-7 col-xl-6">
                    {TuitsList()}
                </div>
            </div>

        </>
    );
};
export default HomeComponent;