const PostSummaryItem = (post) => {
    return (`
        <div class="card">
            <div class="card-body">
                <div>
                    <img class="wd-post-image" src=${post.image}>
                </div>
                    <div class="wd-float-left">
                        <p class="card-text wd-post-trendline wd-post-info">${post.topic}</p>
                        <div class="wd-title-inline-container">
                            <p class="card-text wd-post-title wd-title-inline-items">${post.userName}</p>
                            <span class="card-text fa fa-check-circle wd-title-inline-items"></span>
                            <span class="card-text wd-post-info wd-title-inline-items"> - ${post.time}</span>
                        </div>
                        <p class="card-text wd-post-title">${post.title}</p>
                        <span class="card-text wd-post-info wd-title-inline-items wd-post-trendline">${post.tweets} tuits</span> 
                    </div>
                <div class="wd-float-done"></div>
            </div>
        </div>
    
    `);
}

export default PostSummaryItem;