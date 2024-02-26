"use client";

import Typewriter from 'typewriter-effect';
import CubeSketch from '../Cube';
import "./Introduction.css"; 

export default function Introduction() {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-5 text-paragraph-gray">
                <div className="mb-10">
                    <CubeSketch />
                </div>
                <div className='typewriter-style text-center'>
                    <Typewriter
                        onInit={(typewriter) => {
                        typewriter.typeString("hey, i'm <strong>ethan</strong>")
                        .pauseFor(1000)
                        .start(); 
                    }}
                    options={{
                        delay: 80
                    }}
                    />
                    <div className='text-center'>
                        <h2 className='text-3xl mt-5'>i make things sometimes</h2>
                        <p className='mt-5 text-lg max-w-2xl text-center'>I'm a first-gen, low-income junior at Northwestern University aiming to be a full-stack Software Engineer. My interests include web development, human-computer interaction, cloud computing, and machine learning. Simply put, I'm passionate about developing accessible, efficient, and easy-to-use tech solutions to empower communities and tackle real-world challenges.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};