import React from 'react';

function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-10 bg-gradient-to-r from-teal-500 to-cyan-900 bg-opacity-80 text-slate-50">
            <h1 className= "text-4xl md:text-6xl mb-1 md:mb-3 font-bold">Angel Cervantes</h1>
            <p className= "text-base md:text-xl mb-3 font-medium">
            UHD Alumni BS in Computer Science with interest in fullstack development
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I graduated from the University of Houston-Downtown in May 20, 2023. I am eager to grow as a fullstack develepor.
            </p>
        </div>
    )
}

export default Intro;