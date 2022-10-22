import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
function Tuiter() {
    return(
    <div>
        <Nav/>
        <NavigationSidebar active="home"/>
        <WhoToFollowListItem who={{
            userName: 'NASA', handle: 'NASA',
            avatarIcon: 'nasa-logo.png',
        }}/>
        <WhoToFollowListItem who={{
            userName: 'Tesla', handle: 'tesla',
            avatarIcon: 'tesla-logo.png', }}/>
        <WhoToFollowListItem who={{
            userName: 'SpaceX', handle: 'SpaceX',
            avatarIcon: 'space-x-logo.jpeg', }}/>
        <h1>Tuiter</h1>
    </div>
    );
}
export default Tuiter