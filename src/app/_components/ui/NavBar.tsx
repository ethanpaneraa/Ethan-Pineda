"use client"; 

import { useState } from "react"; 

interface Link {
    name: string;
    url: string;
};

export default function NavBar() {
    
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isDropdownExpanded, setIsDropdownExpanded] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    
    // handletoogle that is type safe
    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isExpanded) {
            setIsExpanded(true); // Directly show the navbar when opening
        } else {
            setIsAnimating(true); // Trigger slide-out animation
            setTimeout(() => {
                setIsExpanded(false); // Hide the navbar after the animation
                setIsAnimating(false); // Reset animation state
            }, 300); // Match this duration with your CSS animation duration
        }
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        e.preventDefault(); // Prevent the default anchor link behavior
    
        // If the URL is not a page anchor (e.g., "/"), handle differently
        if (url.startsWith('#')) {
            const targetElement = document.querySelector(url); // Select the target element based on the URL
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the target element
            }
        } else {
            // Handle non-anchor URLs differently, possibly using your routing logic
            console.log("URL is not an anchor, handle accordingly.");
        }
    };
    

    const links: Array<Link> = [
        { name: "<home>", url: "#home" },
        { name: "<about>", url: "#about" },
        { name: "<expeience>", url: "#experience" },
        { name: "<organizations>", url: "#organizations"}, 
        { name: "<projects>", url: "#projects" },
        { name: "<contact>", url: "#contact" }
    ];
    return (
        <>
            {isExpanded && <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md z-30"></div>}
            <nav className="bg-navbar-color px-2 sm:px-4 py-2.5 top-0 sticky z-50">
                <div className="max-w-screen-2xl flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex gap-5">
                        {/* <img src="/Logo.png" alt="Ethan Pineda" className="w-12 h-12" /> */}
                        <span className="self-center text-lg font-semibold whitespace-nowrap text-paragraph-gray">Ethan Pineda</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-paragraph-gray rounded-lg md:hidden dark:text-paragraph-gray" aria-expanded={isExpanded} onClick={handleToggle}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${isExpanded || isAnimating ? (isAnimating ? "animate-slide-out" : "animate-slide-in") : "hidden"} md:flex fixed right-0 top-0 h-full z-40 w-[75%] md:w-auto md:static bg-navbar-color md:bg-transparent shadow-lg md:shadow-none`} id="navbar-default">
                        <button onClick={handleToggle} className="p-2 text-paragraph-gray md:hidden" style={{position: 'absolute', top: 0, right: 0}}>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <ul className="flex flex-col md:flex-row items-center justify-center p-4 mt-4 rounded-lg md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-center md:text-left">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} onClick={(e) => handleLinkClick(e, link.url)} className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-paragraph-gray">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};


{/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg> */}

{/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}