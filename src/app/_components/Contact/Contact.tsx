import SectionHeader from "../../ui/SectionHeader";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Contact() {

    return (
        <>
            <div className="flex flex-col items-center justify-center text-paragraph-gray px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto mb-10 md:py-36">
                <h2 className="text-4xl sm:text-4xl md:text-4xl font-bold mb-10 flex-shrink-0">
                    {`</${"get-in-touch"}>`}
                </h2>
                <div className="max-w-screen-sm">
                    <p className="text-left text-paragraph-gray mb-10">I&apos;m currently not looking for any new professional opportunities for the summer of 2024, but I am interested in any opportunities for Spring 2024, Fall 2024, Winter 2025, and spring 2025 internships. Feel free to ask me anything or just say hi!</p>
                    <div className="flex items-center justify-center gap-4 mt-5">
                        <a
                            href="mailto:ethanpineda2025@u.northwestern.edu
                            "
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange"
                        >   
                            <EmailIcon className="h-6 w-6 text-orange" />
                    </a>
                        <a
                            href="https://www.linkedin.com/in/ethanpineda/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange"
                        >   
                            <LinkedInIcon className="h-6 w-6 text-orange" />
                        </a>
                        <a
                            href="https://github.com/ethanpaneraa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange"
                        >
                            <GitHubIcon className="h-6 w-6 text-orange" />
                        </a>
                        <a 
                            href="https://www.instagram.com/ethanpinedaa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange"
                        >
                            <InstagramIcon className="h-6 w-6 text-orange" />
                        </a>
                        <a
                            href="https://twitter.com/EthanPaneraa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange"
                        >
                            <XIcon className="h-6 w-6 text-orange" />
                        </a>
                    </div>
            </div>
        </div>
        </>
    );
};