const WhoToFollowListItem = (who) => {
    // console.log(who.avatarIcon);
    return (`
        <li class="list-group-item">
            <div class="wd-user-item">
                <img src=${who.avatarIcon} class="wd-user-image me-xxl-3 me-xl-2 me-lg-0"  alt="Avatar Icon">
                    <div class="ms-2 me-auto ms-lg-0">
                        <div class="fw-bold">${who.userName}
                            <span class="card-text fa fa-check-circle wd-title-inline-items"></span>
                        </div>
                        @${who.handle}
                    </div>
            </div>
            <span class="btn btn-primary rounded-pill wd-follow-button">Follow</span>
        </li>

`); }

export default WhoToFollowListItem;