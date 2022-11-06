import React from "react";
import "./ProfileView.css";

// const test = {
//    firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
//    profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
//    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.
//          Retuits and likes are not endorsements.',
//    website: 'youtube.com/webdevtv',
//    location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
//    followingCount: 340,	followersCount: 223
//  }
 
const ProfileView = (tuitProfile) => {
   const {profileName = 'Sheetal', tweetCount = '12212', handle = '@sheetal', bio, followersCount, followingCount, bannerPicture} = tuitProfile;
    return( <>
           <div className={'profileViewHeader'}>
             <div>
                <i className="bi bi-arrow-left"></i>
             </div>
             <div>
                <section><strong>{profileName}</strong></section>
                <section>{tweetCount} tweets</section>
             </div>
             <br/>
             
           </div>
           <div>
                <img src={`../../images/${bannerPicture}`} height="200px"/>
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
      <section><h4 style={{margin: 0}}>{profileName}</h4></section>
      <section>{handle}</section><br/>
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