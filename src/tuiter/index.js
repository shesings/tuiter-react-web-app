import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import PostSummaryItem from "./post-summary-list/post-summary-item.js";
function Tuiter() {
    return(
    <div>
        <Nav/>
        <NavigationSidebar active="home"/>
        <h1>Tuiter</h1>
        <WhoToFollowList/>
        <PostSummaryItem/>
    </div>
    );
}
export default Tuiter