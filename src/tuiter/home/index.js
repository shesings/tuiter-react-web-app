import React from "react";
// import NavigationSidebar from "../navigation-sidebar/index.js";
// import PostSummaryList from "../post-summary-list/index.js";
// import PostList from "../post-list/index.js";
// import WhoToFollowList from "../who-to-follow-list/index.js";
import TuitsList from "../tuits/index.js";

import "./index.css";

const HomeComponent = () => {
    return( <>
            <div className="row mt-2">
                <div className="col-10 col-lg-7 col-xl-6">
                    {TuitsList()}
                </div>
            </div>

        </>
    );
};
export default HomeComponent;