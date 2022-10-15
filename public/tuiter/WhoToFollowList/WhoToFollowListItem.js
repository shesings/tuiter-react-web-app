const whoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="wd-user-item">
                <img class="wd-user-image me-xxl-3 me-xl-2 me-lg-0" src="../../images/virgin-galactic-logo.svg">
                    <div class="ms-2 me-auto ms-lg-0">
                        <div class="fw-bold">Virgin Galactic
                            <span class="card-text fa fa-check-circle wd-title-inline-items"></span>
                        </div>
                        @virgingalactic
                    </div>
            </div>
            <span class="btn btn-primary rounded-pill wd-follow-button">Follow</span>
        </li>
`); }

export default whoToFollowListItem;