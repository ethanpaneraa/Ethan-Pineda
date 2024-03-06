"use client";

import Typewriter from 'typewriter-effect';
import FadeInSection from '../FadeInSection/FadeInSection';
import ResumeButton from '../ResumeButton/ResumeButton';
import dynamic from 'next/dynamic';
import "./Introduction.css"; 

const DynamicCubeSketch = dynamic(() => import('../Cube/Cube'), {
    ssr: false
});

export default function Introduction() {
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen text-paragraph-gray px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <div className="flex flex-col sm:flex-row-reverse items-center justify-center w-full space-x-0 sm:space-x-4">
                    <div className="mb-10">
                        <DynamicCubeSketch />
                    </div>
                    <FadeInSection delay={100}>
                        <div className='typewriter-style text-left'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString("hi, i'm <strong>ethan</strong>.")
                                    .pauseFor(1000)
                                    .start(); 
                                }}
                                options={{
                                    delay: 80
                                }}
                            />
                            <div className='text-left'>
                                <h2 className='text-4xl mt-5'>i build things sometimes.</h2>
                            </div>
                            <p className='mt-5 text-md text-left mb-20 lg:w-3/4'>
                                I&apos;m a first-gen, low-income junior at Northwestern University and aspiring full-stack Software Engineer. My interests include web development, human-computer interaction, cloud computing, and machine learning. Minus the jargon, I&apos;m passionate about building accessible, efficient, and easy-to-use tech solutions to empower communities and tackle real-world challenges.
                            </p>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </>
    );
};
