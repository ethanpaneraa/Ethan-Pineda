"use client";

import Typewriter from 'typewriter-effect';
import FadeInSection from '../FadeInSection/FadeInSection';
import "./Introduction.css"; 
import dynamic from 'next/dynamic';

const DynamicCubeSketch = dynamic(() => import('../Cube'), {
    ssr: false
});

export default function Introduction() {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-5 text-paragraph-gray">
                <div className="mb-10">
                    <DynamicCubeSketch />
                </div>
                <FadeInSection delay={100}>
                    <div className='typewriter-style text-center'>
                        <Typewriter
                            onInit={(typewriter) => {
                            // eslint-disable-next-line react/no-unescaped-entities
                            typewriter.typeString("hi, i'm <strong>ethan</strong>.")
                            .pauseFor(1000)
                            .start(); 
                        }}
                        options={{
                            delay: 80
                        }}
                        />
                        <div className='text-center'>
                            <h2 className='text-4xl mt-5'>i make things sometimes.</h2>
                        </div>
                            <p className='mt-5 text-lg max-w-3xl text-center'>
                            I&apos;m a first-gen, low-income junior at Northwestern University and aspiring full-stack Software Engineer. My interests include web development, human-computer interaction, cloud computing, and machine learning. Minus the jargon, I&apos;m passionate about building accessible, efficient, and easy-to-use tech solutions to empower communities and tackle real-world challenges.
                            </p>
                    </div>
                </FadeInSection>
            </div>
        </>
    );
};