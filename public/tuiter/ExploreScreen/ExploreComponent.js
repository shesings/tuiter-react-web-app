import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
            <div class="wd-main-content">
                <div class="input-group wd-search-bar">
                    <span class="fa fa-search wd-form-icon"></span>
                    <input type="text" class="form-control rounded-pill" placeholder="Search Tuiter">
                    <span class="fa fa-cog fa-2x wd-tuiter-theme wd-settings"></span>
                </div>
            </div>
            <div class="wd-main-content">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="new-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="new-item d-none d-lg-block d-md-block d-sm-none">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
        <div class="wd-main-content">
            <div class="card wd-card-container">
                <img src="../../images/Starship-Mk1-Day.webp" class="card-img-top" alt="SpaceX Starship rocket">
                <span class="wd-card-image-text wd-bottom-left">SpaceX's Starship</span>
            </div>
            ${PostSummaryList()}
        </div>
    
    `);
}
export default ExploreComponent;