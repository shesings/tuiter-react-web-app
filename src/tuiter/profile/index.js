import React from "react";
import "./index.css";
import ProfileView from "./ProfileView";
const mockData = {
   firstName: 'Sheetal', lastName: 'Singh', handle: '@shesings',
   profilePicture: 'test.png', 	bannerPicture: 'profileCover.jpg',
   bio: `Student, Software Engineer by day, gamer by night.
         Retuits and likes are not endorsements.`,
   website: 'youtube.com/webdevtv',
   location: 'Chicago, IL',	dateOfBirth: '7/7/2035',	dateJoined: '4/2009',
   followingCount: 340,	followersCount: 223
 }
 
const ProfileComponent = ({editMode = false}) => {
    return( <>
           {!editMode && <ProfileView {...mockData}/>}
        </>
    );
};
export default ProfileComponent;