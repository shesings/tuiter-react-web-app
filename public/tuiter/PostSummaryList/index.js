import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const PostSummaryList = () => {
    return(`
            ${
                posts.map(post => {
                    if (post.tweets === undefined) {
                        post.tweets = 0;
                    }
                    return(PostSummaryItem(post));
                }).join('')
            }
    `);
}
export default PostSummaryList;