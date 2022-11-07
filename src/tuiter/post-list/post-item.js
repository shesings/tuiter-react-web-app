import React from "react";
const PostItem = (
    {
        post = {
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "avatarIcon": "../../images/elonmusk-twitter-icon.jpeg",
            "time": "23h",
            "tuit": "Amazing show about @Inspiration4x mission!",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "article": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "link": "netflix.com",
            "image": "../../images/space-docuseries.jpeg",
            "comments": "4.2K",
            "retuits": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return(
        <div className="card wd-card">
            <div className="card-body">
                <div className="wd-user-post">
                    <img src={post.avatarIcon} className="wd-user-image me-xxl-3 me-xl-2 me-lg-0" alt="Avatar Icon"/>
                        <div className="ms-2 me-auto ms-lg-0">
                            <div>
                                <span className="fw-bold">{post.userName}</span>
                                <span className="card-text fa fa-check-circle wd-title-inline-items"></span>
                                @{post.handle}
                                <span className="card-text wd-post-info wd-title-inline-items"> - {post.time}</span>
                            </div>
                            <p className="card-text wd-user-tuit">{post.tuit}</p>
                        </div>
                </div>
                <div>
                    <img src={post.image} className="wd-post-image-home me-xxl-3 me-xl-2 me-lg-0" alt="Post Image"/>
                </div>
                <div className="wd-user-tuit">
                    <p className="card-text wd-post-article">{post.title}</p>
                    <span className="card-text wd-post-info wd-title-inline-items">{post.article}</span>
                    <span className="card-text wd-post-info wd-title-inline-items">{post.link}</span>
                </div>

                <div className="text-center wd-post-actions-container">
                            <span
                                className="card-text fa fa-comment wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                                <i className="bi bi-chat"></i>
                                 {post.comments}
                            </span>
                    <span className="card-text wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                            <i className="bi bi-repeat"></i>
                             {post.retuits}
                            </span>
                    <span className="card-text wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${post.liked ? 'red' : 'lightgrey'}`} class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                         {post.likes}
                            </span>
                    <span className="card-text wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                    <i className="bi bi-share"></i>

                            </span>
                </div>

                <div className="wd-float-done"></div>
            </div>
        </div>
    );
};
export default PostItem;