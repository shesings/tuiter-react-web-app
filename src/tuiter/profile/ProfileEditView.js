import React, {useState} from "react";
import { Link } from "react-router-dom";
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
 
const ProfileEditView = (tuitProfile) => {
   const {profileName = 'Sheetal', tweetCount = '12212', handle = '@sheetal', bio, followersCount, followingCount, bannerPicture} = tuitProfile;
   const [editBio, setBio] = useState(bio);

    
    return( <>
      <div className={'profileEditHeader'}>           
           <div className={'profileEditLabels'}>
               <Link style={{color: 'black'}} to={'/tuiter/profile'}><i className="bi bi-x"></i></Link>
               <div>
                     <section><strong>Edit profile</strong></section>
               </div>
            </div>
           <Link to={'/tuiter/profile'}><button className="saveButton">Save</button></Link>
        </div>
        <div>
             
         </div>
        <br/>
      <div>
           <img src={`../../images/${bannerPicture}`} height="230px"/>
       </div>
       <br/>
       <div class="form-floating mb-3">
            <input type="emaitextl" class="form-control" id="nameInput" placeholder="Name" />
            <label for="nameInput" class="form-label">Name</label>
         </div> 
         <div class="form-floating mb-3">
             <textarea value={bio} placeholder="Enter your bio"
               style={{height: '100px'}}
               id="bioInput"
                     className="form-control"
                     onChange={(event) => setBio(event.target.value)}>
            </textarea>
            <label for="bioInput" class="form-label">Bio</label>
         </div> 
         <div class="form-floating  mb-3">
            <input type="text" class="form-control" id="locationInput" placeholder="Location" />
            <label for="locationInput" class="form-label">Location</label>
         </div> 
         
         <div class="form-floating mb-3">
            <input type="text" class="form-control" id="websiteInput" placeholder="website" />
            <label for="websiteInput" class="form-label">Website</label>
         </div> 
         
         <div class="form-floating mb-3">
           <input type="text" class="form-control" id="locationInput" placeholder="Location" />
            <label for="locationInput" class="form-label">Birth Date</label>
         </div> 
   </>
   )
};

export default ProfileEditView;