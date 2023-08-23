import React from 'react';

function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-10 bg-gradient-to-r from-teal-500 to-cyan-900 bg-opacity-80 text-slate-50">
            <h1 className= "text-4xl md:text-6xl mb-1 md:mb-3 font-bold">Angel Cervantes</h1>
            <p className= "text-base md:text-xl mb-3 font-medium">
            University of Houston-Downtown Alumni and Full Stack Developer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
            My name is Angel Cervantes, I graduated from the University of Houston-Downtown with a Bachelor of Computer Science.
            Relevant courses I have taken that will compliment my career are Operating System Concepts, Database Manangement Systems, 
            Computer Organization and Architect, Web Programming and Algorithms and Data Structures. These courses improved my knowledge of 
            computers and I received a well rounded skills from them.
            On my own time, I practice with contemporary software development tools to increase my skills as a full stack developer. 
            I have a strong knowledge of object-oriented programming, and the process of developing projects.
            Please check out my portfolio on my projects and feel free to contact me with any questions. 
            </p>
        </div>
    )
}

export default Intro;