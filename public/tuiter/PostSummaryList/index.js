import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const PostSummaryList = () => {
    return(`
        <div class="wd-main-content">
            <div class="card wd-card-container">
                <img src="../../images/Starship-Mk1-Day.webp" class="card-img-top" alt="SpaceX Starship rocket">
                <span class="wd-card-image-text wd-bottom-left">SpaceX's Starship</span>
            </div>
            
            ${
                posts.map(post => {
                    if (post.tweets === undefined) {
                        post.tweets = 0;
                    }
                    return(PostSummaryItem(post));
                }).join('')
            }
        </div>
    `);
}
export default PostSummaryList;