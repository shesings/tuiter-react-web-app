import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
function Tuiter() {
    return(
    <div>
        <Nav/>
        <NavigationSidebar active="home"/>
        <h1>Tuiter</h1>
    </div>
    );
}
export default Tuiter