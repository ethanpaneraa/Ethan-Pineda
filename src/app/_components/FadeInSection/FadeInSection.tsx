import { useState, useEffect, useRef } from "react"; 

export default function FadeInSection({ delay, children } : { delay: number, children: React.ReactNode }) {

    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<any>();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                };
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? "is-show" : ""}`} style={{transitionDelay: `${delay}`}} ref={domRef}>
            {children}
        </div>
    );
};