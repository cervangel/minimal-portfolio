import React from 'react';

function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-10 bg-gradient-to-r from-teal-500 to-cyan-900 bg-opacity-80 text-slate-50">
            <h1 className= "text-4xl md:text-6xl mb-1 md:mb-3 font-bold">Angel Cervantes</h1>
            <p className= "text-base md:text-xl mb-3 font-medium">
            UHD Senior in Computer Science with interest in Web Development
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
            I am a Senior at the University of Houston-Downtown graduating Spring 2023.
            My goal is to begin as a front-end developer and pave my way to a full-stack developer.
            I built this website using React, Tailwind, and Vite.
            I am eager to learn how to design websites, then focus my attention on how the back end function.
            My interest involve learning how to hack, although very beginner leve,
            and also learning Linux OS and the many different distributions. 
            </p>
        </div>
    )
}

export default Intro;