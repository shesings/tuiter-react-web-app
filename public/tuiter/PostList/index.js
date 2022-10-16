import PostItem from "./PostItem.js";
import posts from "./posts.js";
const PostList = () => {
    return(`
            <link rel="stylesheet" href="index.css">
            ${
                posts.map(post => {
                    if (post.tweets === undefined) {
                        post.tweets = 0;
                    }
                    return(PostItem(post));
                }).join('')
            }
        `);
}
export default PostList;