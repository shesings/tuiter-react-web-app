const PostItem = (post) => {
    return (`
        <div class="card">
            <div class="card-body">
                <div class="wd-user-post">
                    <img src=${post.avatarIcon} class="wd-user-image me-xxl-3 me-xl-2 me-lg-0"  alt="Avatar Icon">
                    <div class="ms-2 me-auto ms-lg-0">
                        <div class="fw-bold">
                            ${post.userName}
                            <span class="card-text fa fa-check-circle wd-title-inline-items"></span>
                            @${post.handle}
                            <span class="card-text wd-post-info wd-title-inline-items"> - ${post.time}</span>
                        </div>
                        
              
                        <p class="card-text wd-user-tuit">${post.tuit}</p>
                    </div>
                </div>

                        <div>
                            <img src=${post.image} class="wd-post-image-home me-xxl-3 me-xl-2 me-lg-0"  alt="Post Image">
                        </div>
                        <div class="wd-user-tuit">
                            <p class="card-text wd-post-article">${post.title}</p>
                            <span class="card-text wd-post-info wd-title-inline-items">${post.article}</span>
                            <span class="card-text wd-post-info wd-title-inline-items">${post.link}</span>
                        </div>
                        
                        <div class="text-center wd-post-actions-container">
                            <span class="card-text fa fa-comment wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                                 ${post.comments}
                            </span>
                            <span class="card-text wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                                <i class="fa fa-retweet" aria-hidden="true"></i> ${post.retuits}
                            </span>
                            <span class="card-text wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                                <i class="far fa-heart"></i> ${post.likes}
                            </span>
                            <span class="card-text wd-post-info wd-title-inline-items wd-post-trendline wd-post-action">
                                <i class="fa fa-upload" aria-hidden="true"></i>
                            </span> 
                        </div>

                <div class="wd-float-done"></div>
            </div>
        </div>
    
    `);
}

export default PostItem;