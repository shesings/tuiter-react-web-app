import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfileView.css";
 
const ProfileView = () => {
   const tuitProfile = useSelector((state) => state.profile);

   const {profileName = 'Sheetal', tweetCount, handle = '@sheetal', bio, followersCount, followingCount, bannerPicture} = tuitProfile;

    return( <>
           <div className={'profileViewHeader'}>
             <div>
                <i className="bi bi-arrow-left"></i>
             </div>
             <div>
                <section><strong>{profileName}</strong></section>
                <section>{tweetCount || 0} tweets</section>
             </div>
             <br/>
             
           </div>
           <div>
                <img src={`../../images/${bannerPicture}`} height="230px"/>
            </div>
            <div className="profile-details">
               <NameAndTag profileName={profileName} handle={handle} bio={bio} />
            </div>
            <div className="profile-details">
               <ProfileLineDetail {...tuitProfile} />
            </div>
            <div>
               <FollowersAndFollowingCount numFollowers={followersCount} numFollowing={followingCount} />
            </div>
        </>
    );
};

const NameAndTag = ({profileName, handle, bio}) => {
   return (<div>
      <div className="nameTagEdit">
         <div>
            <section><h4 style={{margin: 0}}>{profileName}</h4></section>
            <section>{handle}</section><br/>
         </div>
         <Link to={'/tuiter/edit-profile'}><button className="editButton"> Edit Profile</button></Link>
      </div>
      <p>{bio}</p>
   </div>)
}

const ProfileLineDetail = ({location, dateOfBirth, dateJoined}) => {
   return (
   <div className="lineDetailSection">
      <p> <i class="bi bi-pin-map-fill"></i>{location}</p>
      <p> <i class="bi bi-balloon"></i>{dateOfBirth}</p>
      <p> <i class="bi bi-calendar-heart"></i>{dateJoined}</p>
   </div>
   )
}

const FollowersAndFollowingCount = ({numFollowers, numFollowing}) => {
   return (
   <>
   <div className="followCountSection">
      <p><strong>{numFollowing}</strong> Following</p>
      <p><strong>{numFollowers}</strong> Followers</p>
   </div>
   </>
   )
}

export default ProfileView;