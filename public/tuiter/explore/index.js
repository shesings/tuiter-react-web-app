import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
function exploreComponent() {
    $('#wd-explore').append(`
        <h2>Explore</h2> 
        
    <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            <!--<h3>Navigation Sidebar</h3>-->
            ${NavigationSidebar()}
        </div>
     
        <div class="col-10 col-lg-7 col-xl-6">
<!--            <h3>ExploreComponent</h3>-->
            ${PostSummaryList()}
        </div>
     
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <ul class="wd-suggested-list list-group">
<!--                <li class="list-group-item wd-user-suggestion d-flex justify-content-between align-items-start list-title">Who to follow</li>-->
                ${WhoToFollowList()}
                
            </ul>
        </div>
     </div>
 
    `);
}

$(exploreComponent);