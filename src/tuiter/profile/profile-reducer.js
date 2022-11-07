import { createSlice } from "@reduxjs/toolkit";

const mockData = {
    firstName: 'Sheetal', lastName: 'Singh', 
    profileName: 'Sheetal',
    handle: '@shesings',
    tweetCount: 1292,
    profilePicture: 'test.png', 	bannerPicture: 'profileCover.jpg',
    bio: `Student, Software Engineer by day, gamer by night.
          Retuits and likes are not endorsements.`,
    website: 'youtube.com/webdevtv',
    location: 'Chicago, IL',	dateOfBirth: '7/7/2035',	dateJoined: '4/2009',
    followingCount: 340,	followersCount: 223
  }

const profileSlice = createSlice({
    name: 'tuits',
    initialState: mockData,
    reducers: {
        saveProfile: (state, action) => {
            console.log(action.payload);
            return {...state, ...action.payload}
        }
    }
});

export const {saveProfile} = profileSlice.actions;

export default profileSlice.reducer;
