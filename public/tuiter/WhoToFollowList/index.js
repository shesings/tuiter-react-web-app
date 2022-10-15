import WhoToFollowListItem from "WhoToFollowListItem.js";
import who from "who.js"
const WhoToFollowList = (who) => {
    return (`
        <ul class="wd-suggested-list list-group">
            <li class="list-group-item wd-user-suggestion d-flex justify-content-between align-items-start list-title">Who to follow</li>
<!--                WhoToFollowListItem.map(who);     -->
        </ul>
`); }
export default WhoToFollowList;