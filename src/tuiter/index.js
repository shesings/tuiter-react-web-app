import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import PostSummaryList from "./post-summary-list/index.js";
function Tuiter() {
    return(
    <div>
        <Nav/>
        <NavigationSidebar active="home"/>
        <h1>Tuiter</h1>
        <WhoToFollowList/>
        <PostSummaryList/>
    </div>
    );
}
export default Tuiter