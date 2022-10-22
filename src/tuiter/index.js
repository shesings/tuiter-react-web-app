import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
function Tuiter() {
    return(
    <div>
        <Nav/>
        <NavigationSidebar active="home"/>
        <h1>Tuiter</h1>
        <WhoToFollowList/>
    </div>
    );
}
export default Tuiter