const PostItem = (post) => {
    return (`
        <div class="card">
            <div class="card-body">
                <div class="wd-user-item">
                    <img src=${post.avatarIcon} class="wd-user-image me-xxl-3 me-xl-2 me-lg-0"  alt="Avatar Icon">
                    <div class="ms-2 me-auto ms-lg-0">
                        <div class="fw-bold">${post.userName}
                            <span class="card-text fa fa-check-circle wd-title-inline-items"></span>
                        </div>
                        @${post.handle}
                        <span class="card-text wd-post-info wd-title-inline-items"> - ${post.time}</span>
                        <p class="card-text">${post.tuit}</p>
                    </div>
                </div>
                
                    <div class="wd-float-left">
                        
                        <div class="wd-title-inline-container">
                            <img src=${post.image} class="wd-post-image-home me-xxl-3 me-xl-2 me-lg-0"  alt="Avatar Icon">
                        </div>
                        <p class="card-text wd-post-title">${post.title}</p>
                        <span class="card-text wd-post-info wd-title-inline-items">${post.article}</span>
                        <span class="card-text wd-post-info wd-title-inline-items">${post.link}</span>
                        <div>
                            <span class="card-text fa fa-comment wd-post-info wd-title-inline-items wd-post-trendline">
                                 ${post.comments}
                            </span>
                            <span class="card-text wd-post-info wd-title-inline-items wd-post-trendline">
                                <i class="fa fa-retweet" aria-hidden="true"></i> ${post.retuits}
                            </span>
                            <span class="card-text wd-post-info wd-title-inline-items wd-post-trendline">
                                <i class="far fa-heart"></i> ${post.likes}
                            </span>
                            <span class="card-text wd-post-info wd-title-inline-items wd-post-trendline">
                                <i class="fa fa-upload" aria-hidden="true"></i>
                            </span> 
                        </div>
                    </div>
                <div class="wd-float-done"></div>
            </div>
        </div>
    
    `);
}

export default PostItem;