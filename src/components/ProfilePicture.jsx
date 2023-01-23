import React from 'react';

function ProfilePicture(){
    return (
        <div className=" pt-10 pb-5 flex items-center flex justify-center ">
        <img src= "public/assets/selfie.jpg" className="w-48 h-56 object-cover rounded-3xl shadow-xl dark:shadow-gray-800" alt="Profile Picture"></img>
        </div>
    )
}

export default ProfilePicture;